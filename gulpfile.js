var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  browserSync = require('browser-sync'),
  karma = require('gulp-karma'),
  clean = require('gulp-clean'),
  compass = require('gulp-compass'),
  runSequence = require('gulp-run-sequence'),

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

cfg.css = {
  all: [
    cfg.root + '/*.scss'
  ],
  root: cfg.root,
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

gulp.task('js', function (cb) {
  runSequence('js-test', 'js-copy', cb);
});

gulp.task('js-test', function (cb) {
  runSequence('js-lint', 'js-karma', cb);
});

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

// css
gulp.task('css', ['test-scss', 'scss']);

gulp.task('test-scss', function () {
  return gulp.src(cfg.css.all)
    .pipe(compass({
      css: cfg.css.out,
      sass: cfg.css.root
    }))
    .pipe(gulp.dest(cfg.css.root));
});

gulp.task('scss', function () {
  return gulp.src(cfg.css.all)
    .pipe(compass({
      css: cfg.css.out,
      sass: cfg.css.root
    }))
    .pipe(gulp.dest(cfg.css.out));
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

gulp.task('compile', function (cb) {
  runSequence('js', 'markup', 'css', cb);
});

gulp.task('test-build', function (cb) {
  runSequence('clean', 'compile', 'test-server', cb);
});

gulp.task('production-build', function (cb) {
  runSequence('clean', 'compile', 'compiled-server', cb);
});

gulp.task('test', ['js-test']);           // $ npm test
gulp.task('server', ['test-server']);     // $ gulp server
gulp.task('build', ['production-build']);

gulp.task('default', function (cb) {
  if (gutil.env.type === 'production') {
    runSequence('production-build', cb);
  } else {
    runSequence('test-build', cb);
  }
});

// gutil.env.type === 'production' ? uglify() : gutil.noop()
