class BaseController {
  constructor(){
    this.path = require('path');
    this.fs = require('fs');
    this.config = require('../config');
    this.dir = this.config.dir;
  }
}
module.exports = BaseController;
