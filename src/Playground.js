class Playground {
  constructor(port) {
    this.express = require('express');
    this.path = require('path');
    this.app = this.express();
    this.server  = require('http').createServer(this.app);
    this.port = port;
    this.config = require('./config');

    this.setup();
  }
  setup() {
    this.setupApp();
    this.setupRoute();
  }
  setupApp() {
    this.app.use(this.express.json());
    this.app.use(this.express.static(this.config.dir.public));
    this.app.use(this.express.static(this.config.dir.dev));
  }
  setupRoute() {
    this.router = require(this.path.join(this.config.dir.router, 'Playground'));
    this.app.use(this.router);
  }
  startHttpServer(){
    this.server.listen(this.port, ()=>{
      console.log('Server http started on port ', this.port);
    });
  }
  start() {
    this.startHttpServer();
  }
}

module.exports = Playground;
