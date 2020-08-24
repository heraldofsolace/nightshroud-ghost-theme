var postcss = require('gulp-postcss');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

sass.compiler = require('sass');
 
const scssToCss = () => gulp.src('./assets/scss/**/*.scss')
                        .pipe(sass.sync().on('error', sass.logError))
                        .pipe(gulp.dest('./assets/css'));

const postCssProcess = () => gulp.src('./assets/css/**/*.css')
                                .pipe(postcss())
                                .pipe(gulp.dest('./assets/dist'));

const processJs = () => gulp.src(['./assets/js/vendor/*.js', './assets/js/functions.js', './assets/js/script.js'])
                        .pipe(concat('bundle.js'))
                        .pipe(minify())
                        .pipe(gulp.dest('./assets/dist'));

exports.default = gulp.series(
    scssToCss,
    postCssProcess,
    processJs
)