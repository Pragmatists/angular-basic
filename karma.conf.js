//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './',

        files: [
            './libs/angular/angular.js',
            './libs/angular-ui-router/release/angular-ui-router.js',
            './libs/angular-local-storage/dist/angular-local-storage.js',
            './libs/lodash/lodash.js',
            './libs/angular-mocks/angular-mocks.js',
            './src/app.js',
            './src/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};