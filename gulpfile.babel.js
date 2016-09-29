let babel = require('gulp-babel');
let gulp = require('gulp');

gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch([
        './src/**/*.js',
    ], ['build']);
});