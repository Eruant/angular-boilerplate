module.exports = function (karma) {
  karma.configure({
    basePath: '../',
    files: [
      <% scripts.forEach(function (file) { %>'<%= file %>',
      <% }); %>
      'app/**/*.js'
    ],
    exclude: [
      'app/lib/*.js'
    ],
    frameworks: [
      'jasmine'
    ],
    plugins: [
      'karma-jasmine',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-phastomjs-launcher'
    ],
    preprocessors: {},
    reporters: 'dots',
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',
    autoWatch: false,
    browsers: [
      'Firefox'
    ]
  });
};
