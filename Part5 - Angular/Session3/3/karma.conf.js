module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-mocks.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.js',
            'dist/**/*.js',
            'test/**/*.spec.js'
        ]
    });
};
