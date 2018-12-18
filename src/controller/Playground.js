var BaseController = require('./BaseController');
class PlaygroundController extends BaseController{
  constructor(){
    super();
    this.request = require('request');
  }
  index(req, res) {
    res.sendFile(this.path.join(this.dir.view, 'index.html'));
  }
  share(req, res) {
    if(process.env.github_access_token==undefined) {
      let playId = this.makePlayId();
      this.fs.writeFile(this.path.join(this.dir.play, playId+'.json'), JSON.stringify(req.body), 'utf8', (err)=>{
        if(err) {return res.json({sucess: 0, msg: err}); }
        return res.json({sucess: 1, msg: 'ok', id:playId});
      });
    } else {
      let playgroundBased64 = Buffer.from(JSON.stringify(req.body)).toString('base64');

      var options = { method: 'POST',
        url: 'https://api.github.com/gists',
        headers:
         { 'User-Agent': 'Playground',
           'cache-control': 'no-cache',
           Authorization: 'token 8a9826942a20d07a15acba0cc1bffe9427658558',
           'Content-Type': 'application/json' },
        body:
         { description: 'Playground',
           public: true,
           files: { 'playground': { content: playgroundBased64 } } },
        json: true };

      this.request(options, function (err, response, body) {
        if(err) {return res.json({sucess: 0, msg: "Couldn't save Playground. Please try again."}); }
        return res.json({sucess: 1, msg: 'ok', id:body.id});
      });
    }
  }
  getPlay(req, res) {
    if(process.env.github_access_token==undefined) {
      let filePath = this.path.join(this.dir.play, req.body.id+'.json');
      if(!this.fs.existsSync(filePath)) {
        return res.json({sucess: 0, msg: "Don't exist the ["+req.body.id+"] Playground"});
      }
      return res.json({sucess: 1, msg: 'ok', playground: JSON.parse(this.fs.readFileSync(filePath).toString())});
    } else {
      var options = { method: 'GET',
        url: 'https://api.github.com/gists/'+req.body.id,
        headers:
         { 'User-Agent': 'Playground',
           'cache-control': 'no-cache',
           Authorization: 'token 8a9826942a20d07a15acba0cc1bffe9427658558',
           'Content-Type': 'application/json' },
         json: true
       };

       this.request(options, function (err, response, body) {
         if(err) {return res.json({sucess: 0, msg: "Couldn't open Playground. Refresh the page"}); }
         return res.json({sucess: 1, msg: 'ok', playground:JSON.parse(Buffer.from(body.files.playground.content, 'base64').toString())});
       });
    }
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
}
module.exports = new PlaygroundController();
