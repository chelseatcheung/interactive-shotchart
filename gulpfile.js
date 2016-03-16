var gulp = require('gulp');
var csv2json = require('gulp-csv2json');
var rename = require('gulp-rename');
var merge = require('gulp-merge-json');

gulp.task('default', function() {
  var csvParseOptions = {};

    //this task turns the csv files into json files
    gulp.src('./client/assets/game-data/forgotten-data/**/*.csv')
      .pipe(csv2json(csvParseOptions))
      .pipe(rename({extname:'.json'}))
      .pipe(gulp.dest('./client/assets/parsed-data/2009-2010.regular_season'));

    //this task merges json files into one big json file
    gulp.src('./client/assets/parsed-data/2009-2010.regular_season/**/*.json')
    .pipe(merge('combined.json'))
    .pipe(gulp.dest('./client/assets/combined-data/2009-2010'));
});