class BaseRouter {
  constructor(){
    this.path = require('path');
    this.express = require('express');
    this.router = this.express.Router();
    this.config = require('../config');
    this.dir = this.config.dir;
  }
}
module.exports = BaseRouter;
