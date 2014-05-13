var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  browserSync = require('browser-sync'),
  karma = require('gulp-karma'),
  clean = require('gulp-clean'),

  cfg = {
    root: 'src',
    dest: 'app'
  };
  
cfg.js = {
  all: [
    cfg.root + '/**/*.js',
    '!' + cfg.root  + '/**/*_test.js'
  ],
  main: [
    cfg.root + '/**/*.js',
    '!' + cfg.root + '/lib/**/*',
    '!' + cfg.root  + '/**/*_test.js'
  ],
  test: [
    '/' + cfg.root + '/**/*_test.js',
    '/!' + cfg.root + '/lib/**/*_test.js'
  ],
  out: cfg.dest + ''
};

cfg.markup = {
  all: [
    cfg.root + '/**/*.html'
  ],
  out: cfg.dest + ''
};

cfg.server = {
  watch: [
    cfg.root + '/**/*.js',
    '!' + cfg.root + '/lib/**/*',
    cfg.root + '/**/*.html'
  ],
  rawDir: cfg.root + '',
  compiledDir: cfg.dest + ''
};

// JavaScript

gulp.task('js', ['js-test', 'js-copy']);

gulp.task('js-test', ['js-lint', 'js-karma']);

gulp.task('js-lint', function () {
  return gulp.src(cfg.js.main)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('js-karma', function () {
  return gulp.src(cfg.js.test)
    .pipe(karma({
      baseDir: './',
      configFile: 'karma.config.js',
      action: 'run'
    }))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('js-copy', function () {
  return gulp.src(cfg.js.all)
    .pipe(gulp.dest(cfg.js.out));
});

// markup

gulp.task('markup', ['markup-copy']);

gulp.task('markup-copy', function () {
  return gulp.src(cfg.markup.all)
    .pipe(gulp.dest(cfg.markup.out));
});

// browsers

gulp.task('test-server', function () {
  return browserSync.init(cfg.server.watch, {
    server: {
      baseDir: cfg.server.rawDir
    }
  });
});

gulp.task('compiled-server', function () {
  return browserSync.init(cfg.server.watch, {
    server: {
      baseDir: cfg.server.compiledDir
    }
  });
});

gulp.task('clean', function () {
  return gulp.src(cfg.dest, {
    read: false
  })
    .pipe(clean());
});

gulp.task('compile', ['clean', 'js', 'markup']);

gulp.task('test', ['js-test']);                           // $ npm test
gulp.task('server', ['test-server']);                     // $ gulp server
gulp.task('default', ['test', 'compile', 'test-server']); // $ gulp

// gutil.env.type === 'production' ? uglify() : gutil.noop()
