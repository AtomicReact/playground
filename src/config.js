var path = require('path');

/* Dir */
var dir = {
  root: path.dirname(require.main.filename)
};
dir.src = path.join(dir.root, './src');
dir.controller = path.join(dir.src, './controller');
dir.model = path.join(dir.src, './model');
dir.public = path.join(dir.src, './public');
dir.router = path.join(dir.src, './router');
dir.view = path.join(dir.src, './view');
dir.dev = path.join(dir.src, './dev');
dir.dist = path.join(dir.src, './dist');

var config = {
  dir: dir
};
module.exports = config;
