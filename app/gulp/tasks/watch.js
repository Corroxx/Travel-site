var gulp = require ('gulp');
var watch = require ('gulp-watch');
var browserSync = require ('browser-sync').create();

//Watch task
gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });
  watch('./index.html', () => {
    browserSync.reload();
  })
  watch('./assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
});

//Gulp inject task
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./temp/styles/styles.css')
    .pipe(browserSync.stream());
});
