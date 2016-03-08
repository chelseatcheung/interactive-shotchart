var gulp = require('gulp');
var csv2json = require('gulp-csv2json');
var rename = require('gulp-rename');

gulp.task('default', function() {
  var csvParseOptions = {};

    gulp.src('./client/assets/game-data/**/*.csv')
      .pipe(csv2json(csvParseOptions))
      .pipe(rename({extname:'.json'}))
      .pipe(gulp.dest('./client/assets/game-data/parsed-data'));
});