var BaseRouter = require('./BaseRouter');
class PlaygroundRouter extends BaseRouter {
  constructor() {
    super();
    this.controller = require(this.path.join(this.dir.controller, 'Playground'));
    this.setup();
    return this.router;
  }
  setup() {
    this.router.get('/', this.controller.index.bind(this.controller));
    this.router.get('/:id', this.controller.index.bind(this.controller));
    this.router.post('/', this.controller.getPlay.bind(this.controller));

    this.router.post('/share', this.controller.share.bind(this.controller));

  }
}

module.exports = new PlaygroundRouter();
