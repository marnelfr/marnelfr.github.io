var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    miniCSS = require('gulp-csso');

function watch(done) {
    livereload({
        start: true
    });
    livereload.listen();
    gulp.watch([
        //html
        '*.html',

        //CSS
        'css/*.css',

        //JS
        'js/*.js',
    ]).on('change', function (event) {
        //On recharge la page
        livereload.reload(event.path);
    });
    done();
}

function minifyCSS(done) {
    gulp.src('css/*.css')
        .pipe(miniCSS())
        .pipe(gulp.dest('css/dist/'))
    done();
}

gulp.task('css', minifyCSS)

gulp.task('default', watch);