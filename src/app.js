import angular from 'angular';

angular.module('app', [])
    .controller('MainController', function() {
        this.message = 'Hello, Angular 1.x with Webpack 5!';
    });

