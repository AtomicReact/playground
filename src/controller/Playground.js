var BaseController = require('./BaseController');
class PlaygroundController extends BaseController{
  constructor(){
    super();
  }
  index(req, res) {
    res.sendFile(this.path.join(this.dir.view, 'index.html'));
  }
  share(req, res) {
    let playId = this.makePlayId();
    this.fs.writeFile(this.path.join(this.dir.play, playId+'.json'), JSON.stringify(req.body), 'utf8', (err)=>{
      if(err) {return res.json({sucess: 0, msg: err}); }
      return res.json({sucess: 1, msg: 'ok', id:playId});
    });
  }
  getPlay(req, res) {
    let filePath = this.path.join(this.dir.play, req.body.id+'.json');
    if(!this.fs.existsSync(filePath)) {
      return res.json({sucess: 0, msg: "Don't exist this Playground"});
    }
    return res.json({sucess: 1, msg: 'ok', playground: JSON.parse(this.fs.readFileSync(filePath).toString())});
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
