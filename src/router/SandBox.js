var BaseRouter = require('./BaseRouter');
class SandBoxRouter extends BaseRouter {
  constructor() {
    super();
    this.setup();
    return this.router;
  }
  setup() {
    this.router.get('/', (req, res)=>{
      res.sendFile(this.path.join(this.dir.view, 'SandBox.html'));
    });
  }
}

module.exports = new SandBoxRouter();
