let babel = require('gulp-babel');
let gulp = require('gulp');
let eslint = require('gulp-eslint');

const PATH_SRC = ['./src/**/*.js'];
const PATH_DIST = 'dist';

gulp.task('default', ['build']);

gulp.task('lint', function(){
    return gulp.src(PATH_SRC)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', ['lint'], function() {
    return gulp.src(PATH_SRC)
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest(PATH_DIST));
});

gulp.task('watch', ['build'], function() {
    return gulp.watch([
        PATH_DIST,
    ], ['build']);
});