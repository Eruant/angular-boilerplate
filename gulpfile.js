var gulp = require('gulp'),
  util = require('gulp-util'),
  jshint = require('gulp-jshint'),
  browserSync = require('browser-sync'),

  cfg = {
    root: 'app'
  };
  
cfg.js = {
  all: cfg.root + '/**/*.js'
};

cfg.server = {
  watch: [
    cfg.root + '/**/*.js',
    cfg.root + '/**/*.html'
  ],
  baseDir: cfg.root
};

gulp.task('lint', function () {
  return gulp.src(cfg.js.all)
    .pipe(util.buffer(function (err, files) {
      console.log("[FILES]", files);
    }))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .on('error', function () {
      console.error('[JSHint] encountered an error');
      this.emit('end');
    });
});

gulp.task('karma', function () {
  return gulp.src(cfg.js.all)
    .pipe(util.noop());
});

gulp.task('test-server', function () {
  return browserSync.init(cfg.server.watch, {
    server: {
      baseDir: cfg.server.baseDir
    }
  });
});

gulp.task('test', ['lint', 'karma']);
gulp.task('default', ['test']);

// gutil.env.type === 'production' ? uglify() : gutil.noop()
