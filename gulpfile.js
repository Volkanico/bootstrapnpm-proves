/*.1 para hacer cambios a los css con los archivos scss*/

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function change_scss_css() {
  return gulp.src('./lib/bootstrap-5.1.3/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./lib/bootstrap-5.1.3/dist/css'));
};

exports.change_scss_css = change_scss_css;
/*.1 para hacer cambios a los css con los archivos scss EN EL ARCHIVO CUSTOM*/

'use strict';

function change_scss_css1() {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.change_scss_css1 = change_scss_css1;
/*-----------------------------------------------------------------------------*/
/*.2 sass:watch */

exports.sasswatch = function() {
  gulp.watch('./sass/*.scss', change_scss_css);
}