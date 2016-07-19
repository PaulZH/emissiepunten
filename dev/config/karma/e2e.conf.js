/* global module */

// Karma end-to-end configuration

module.exports = function(config) {
    config.set({
        basePath: '../../../',// path to repo root
        frameworks: ['karma-cukes'],
        files: [
            { pattern: 'src/**/*.feature', included: false, watched: true, served: true },
            { pattern: 'dev/config/karma/e2e-step-definitions.js', included: true, watched: true, served: true }
        ],
        client: {
            args: process.argv.slice(4),
            captureConsole: true
        },
        reporters: ['kc-pretty', 'kc-json', 'junit'],
        kcJsonReporter: {
            outputDir: 'dev/reports/behaviour',
            outputFile: 'behaviour-{shortBrowserName}.json'
        },
        junitReporter: {
            outputDir: 'dev/reports/behaviour',
            outputFile: 'behaviour.xml',
            useBrowserName: false
        },
        port: 9876,
        colors: true,
        browserConsoleLogOptions: {
            level: 'debug',
            format: '%T: %m',
            terminal: true
        },
        failOnEmptyTestSuite: false,
        logLevel: config.LOG_INFO, // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        urlRoot: "/__karma__/",
        proxies: {
            "/": "http://localhost:8080/"
        },
        browsers: ['PhantomJS'],
        autoWatch: true,
        singleRun: false
    });
};
