module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            { pattern: 'src/**/*.js', watched: false }
        ],


        preprocessors: {
            'src/**/*.js': ['webpack']
        },

        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    }
                ]
            }
        },

        reporters: ['progress', 'coverage-istanbul'],

        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },

        browsers: ['ChromeHeadless'],

        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-coverage-istanbul-reporter',
            'karma-chrome-launcher'
        ],

        singleRun: true
    });
};
