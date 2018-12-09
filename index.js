if(process.env.deployMode=='true') {
  var gulpFile = require('./gulpfile');
  gulpFile.deploy();
}

var Playground = require('./src/Playground');
var myPlayground = new Playground(process.env.PORT || 80);
myPlayground.start();
