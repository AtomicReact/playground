require('dotenv').config();
console.log('[process.env.deployMode]', process.env.deployMode);

if(process.env.deployMode==='true') {
  var Atomic = require('atomicreact').Atomic;
  new Atomic(require('./AtomicReact_config.js'));

  var gulpFile = require('./gulpfile');
  gulpFile.deploy();
}

var Playground = require('./src/Playground');
var myPlayground = new Playground(process.env.PORT || 80);
myPlayground.start();
