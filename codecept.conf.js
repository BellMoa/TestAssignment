exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://genjo.ml/',
      browser: 'chrome',
      port: 4444,
      restart: false,
      windowSize: '1920x1680'
    }
  },
  include: {
    I: './steps_file.js',
    loginFormPage: './pages/LoginForm.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'TestAssignment',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}