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
dir.play = path.join(dir.src, './play');

var config = {
  dir: dir,
  google: {
    client_id: '500280409256-n699dn1v8007q2mprnn0qpsseghvffvl.apps.googleusercontent.com',
    folder_id: ['1WMl7PLRt9C1-fBZfsZFsaJapmlMFOuuh']
  }
};
module.exports = config;
