var gulp = require('gulp')
var util = require('gulp-util')
var semver = require('semver')

if (semver.gt(process.version, '1.0.0')) {
  var gulpStylelint = require('gulp-stylelint').default
  var consoleReporter = require('gulp-stylelint-console-reporter').default
  var config = require('../config').lintCss

  gulp.task('lintCss', function lintCssTask() {
    var options = Object.assign(
      {
        reporters: [
          consoleReporter()
        ]
      },
      config.lintOptions
    )

    return gulp
      .src(config.src)
      .pipe(gulpStylelint(options))
  })
}
else {
  gulp.task('lintCss', function lintCssTask() {
    util.log(util.colors.magenta('WARNING:'), ' \'lintCss\' task skipped. NodeJS is too old.')
  })
}

