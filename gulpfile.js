const gulp = require ("gulp");
const sass = require ("gulp-sass") (require("sass")) ;
const imageMin= require ("gulp-imagemin")


function compila(){
    return gulp.src('./source/styles/*scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles/'))
}

function images() {
    return gulp.src('./source/images/*png')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images/'))
}


exports.compila = compila
exports.images = images



exports.default = function (){
    gulp.watch('./source/styles/*.scss',    {ignoreInitial: false} , gulp.series(compila)),   
    gulp.watch('./source/images/**',    {ignoreInitial: false} , gulp.series(Image))
    }