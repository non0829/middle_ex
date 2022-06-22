var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var postcss = require('gulp-postcss');
var cssdeclsort = require('css-declaration-sorter');

gulp.task('sass', function () { // gulp sass でsassファイルをコンパイルする
    return gulp.src('./sass/**/*.scss')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")})) // エラーが出てもコンパイルし続ける
        .pipe(sourcemaps.init()) // sassファイルの行数がわかるようにする
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([cssdeclsort({order: 'smacss'})])) // CSSプロパティを並び替える
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
});

gulp.task('sass:watch', function () { // gulp sass:watch でsassファイルを自動でコンパイルする
    gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});