var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');



/**
 * Refresh with BrowserSync
 */
gulp.task('browser-refresh', function () {
    browserSync.reload();
});




/**
 * Run browsersyc w/ sass.
 */
gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: ''
        },
        notify: false
    });
});




/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files and JS files. And CSS!! :)
 */
gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch(['index.html'], ['browser-refresh']);
    gulp.watch(['assets/js/**'], ['browser-refresh']);
});




/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);