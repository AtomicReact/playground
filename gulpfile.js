var Gulp = require('gulp');
var CleanCSS = require('gulp-clean-css');
var MinifyJs = require('gulp-minify');

var cssFolder = 'src/dev/**/*.css';
var jsFolder = 'src/dev/**/*.js';
var distFolder = 'src/dist/';

Gulp.task('default', () => {
  Gulp.watch(cssFolder, cleanCssFunction);
  Gulp.watch(jsFolder, minifyJs);
});

var cleanCssFunction = function() {
  return Gulp.src(cssFolder)
    .pipe(CleanCSS({compatibility: 'ie8'}))
    .pipe(Gulp.dest(distFolder));
}

var minifyJs = function() {
  return Gulp.src(jsFolder)
    .pipe(MinifyJs({
      ext:{
        min:'.js'
      },
      noSource: true,
      ignoreFiles: ['*-min.js']
    }))
    .pipe(Gulp.dest(distFolder));
}

module.exports.deploy = function(){
  cleanCssFunction();
  minifyJs();
}
