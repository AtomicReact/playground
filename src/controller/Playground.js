var BaseController = require('./BaseController');
class PlaygroundController extends BaseController{
  constructor(){
    super();
    this.request = require('request');
  }
  index(req, res) {
    res.sendFile(this.path.join(this.dir.view, 'index.html'));
  }
  async share(req, res) {
    if(process.env.github_access_token!=undefined) {
      return res.json(await this.createGistOnGithub(process.env.github_access_token, Buffer.from(JSON.stringify(req.body)).toString('base64')));
    }
    if(process.env.google_client_secret!=undefined && process.env.google_refresh_token!=undefined) {
      return res.json(await this.createGoogleDriveFile(process.env.google_client_secret, process.env.google_refresh_token, req.body));
    }
    return res.json(await this.createLocalFile(req.body));
  }
  async getPlay(req, res) {
    if(process.env.github_access_token!=undefined) {
      return res.json(await this.getGistOnGithub(process.env.github_access_token, req.body.id));
    }
    if(process.env.google_client_secret!=undefined && process.env.google_refresh_token!=undefined) {
      return res.json(await this.getGoogleDriveFile(process.env.google_client_secret, process.env.google_refresh_token, req.body.id));
    }
    return res.json(await this.getLocalFile(req.body.id));
  }
  makePlayId() {
    var id = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 6; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    if(this.fs.existsSync(this.path.join(this.dir.play, id+'.json'))) {
      return this.makePlayId();
    }
    return id;
  }
  createLocalFile(playgroundObject) {
    return new Promise((resolve)=>{
      let playId = this.makePlayId();
      this.fs.writeFile(this.path.join(this.dir.play, playId+'.json'), JSON.stringify(playgroundObject), 'utf8', (err)=>{
        if(err) { resolve({sucess: 0, msg: err}); }
        resolve({sucess: 1, msg: 'ok', id:playId});
      });
    });
  }
  getLocalFile(id) {
    return new Promise((resolve)=>{
      let filePath = this.path.join(this.dir.play, id+'.json');
      if(!this.fs.existsSync(filePath)) {
        resolve({sucess: 0, msg: "Don't exist the ["+id+"] Playground"});
      }
      resolve({sucess: 1, msg: 'ok', playground: JSON.parse(this.fs.readFileSync(filePath).toString())});
    });
  }
  createGistOnGithub(github_access_token, playgroundBased64) {
    return new Promise((resolve) => {
      var options = { method: 'POST',
      url: 'https://api.github.com/gists',
      headers:
       { 'User-Agent': 'Playground',
         'cache-control': 'no-cache',
         Authorization: 'token '+github_access_token,
         'Content-Type': 'application/json' },
      body:
       { description: 'Playground',
         public: true,
         files: { 'playground': { content: playgroundBased64 } } },
      json: true };
  
      this.request(options, function (err, response, body) {
        if(err) { resolve({sucess: 0, msg: "Couldn't save Playground. Please try again."}) }
        if(body.id==undefined) { resolve({sucess: 0, msg: body.message}) }
        resolve({sucess: 1, msg: 'ok', id:body.id});
      });
    });
  }
  getGistOnGithub(github_access_token, id) {
    return new Promise((resolve)=>{
      var options = {
        method: 'GET',
        url: 'https://api.github.com/gists/'+id,
        headers:{
          'User-Agent': 'Playground',
          'cache-control': 'no-cache',
          Authorization: 'token '+github_access_token,
          'Content-Type': 'application/json' 
        },
        json: true
      };

      this.request(options, function (err, response, body) {
        if(err) { resolve({sucess: 0, msg: "Couldn't open Playground from Gist@Github"}); }
        try {
          resolve({sucess: 1, msg: 'ok', playground:JSON.parse(Buffer.from(body.files.playground.content, 'base64').toString())});
        } catch(e){ console.error(e); resolve({sucess: 0, msg: body.message }); }
      });
    });
  }
  createGoogleDriveFile(google_client_secret, google_refresh_token, playgroundObject) {
    return new Promise((resolve)=>{

      var createFile = (access_token,content, callback)=>{
        var options = {
          method: 'POST',
          preambleCRLF: true,
          postambleCRLF: true,
          url: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
          headers: {
            'Authorization': 'Bearer '+access_token,
            'Content-Type': 'multipart/related',
          },
          multipart: [
            {
              'Content-Type': 'application/json; charset=UTF-8',
              body: JSON.stringify({name: 'Playground.json', parents:this.config.google.folder_id})
            },
            { 
              'Content-Type': 'application/json',
              body: content
            }
          ],
          json: true
        };
    
        this.request(options, callback);
      }

      this.refreshGoogleAccessToken(google_client_secret, google_refresh_token, this.config.google.client_id, (err, response, body)=>{
        if(err) { resolve({sucess: 0, msg: "Couldn't refresh access token. Please try again."}) }
        createFile(body.access_token, JSON.stringify(playgroundObject), (err, response, body)=>{
          if(err) { resolve({sucess: 0, msg: "Couldn't save Playground. Please try again."}) }
          resolve({sucess: 1, msg: 'ok', id:body.id});
        });
      });

    });
  }
  refreshGoogleAccessToken(google_client_secret, google_refresh_token, google_client_id, callback) {
    var options = {
      method: 'POST',
      url: 'https://www.googleapis.com/oauth2/v4/token',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
      form: {
        client_secret: google_client_secret,
        refresh_token: google_refresh_token,
        client_id: google_client_id,
        grant_type: 'refresh_token',
      },
      json: true
    };

    this.request(options, callback);
  }
  getGoogleDriveFile(google_client_secret, google_refresh_token, id) {
    return new Promise((resolve)=>{

      var getFile = (access_token, id, callback) => {
        var options = {
          method: 'GET',
          url: 'https://www.googleapis.com/drive/v3/files/'+id,
          qs: { alt: 'media' },
          headers:{
            'Authorization': 'Bearer '+access_token,
          },
          json: true
        };
  
        this.request(options, callback);
      }
      this.refreshGoogleAccessToken(google_client_secret, google_refresh_token, this.config.google.client_id, (err, response, body)=>{
        if(err) { resolve({sucess: 0, msg: "Couldn't refresh access token. Please try again."}) }
        try {
          getFile(body.access_token, id, (err, response, body)=>{
            if(err) { resolve({sucess: 0, msg: "Couldn't open Playground from Google."}) }
            if(body.error) {  resolve({sucess: 0, msg: "Playground not found", message: body.error.message, code: body.error.code}) }
            resolve({sucess: 1, msg: 'ok', playground:body});
          });
        } catch(e) {
          resolve({sucess: 0, msg: "Couldn't get Playground. Please try again.", exception: e})
        }

      });
    });
  }

}
module.exports = new PlaygroundController();
