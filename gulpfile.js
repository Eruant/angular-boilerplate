var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  browserSync = require('browser-sync'),
  karma = require('gulp-karma'),

  cfg = {
    root: 'app'
  };
  
cfg.js = {
  all: [
    cfg.root + '/**/*.js',
    '!' + cfg.root + '/lib/**/*'
  ],
  test: '/test/**/*.js'
};

cfg.server = {
  watch: [
    cfg.root + '/**/*.js',
    '!' + cfg.root + '/lib/**/*',
    cfg.root + '/**/*.html'
  ],
  baseDir: cfg.root + ''
};

gulp.task('lint', function () {
  return gulp.src(cfg.js.all)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('karma', function () {
  return gulp.src(cfg.js.test)
    .pipe(karma({
      configFile: 'karma.config.js',
      action: 'run'
    }))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('test-server', function () {
  return browserSync.init(cfg.server.watch, {
    server: {
      baseDir: cfg.server.baseDir
    }
  });
});

gulp.task('test', ['lint', 'karma']);
gulp.task('server', ['test-server']);
gulp.task('default', ['test', 'test-server']);

// gutil.env.type === 'production' ? uglify() : gutil.noop()
