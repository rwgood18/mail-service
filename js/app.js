angular.module('emailApp', [
    'ngRoute', 
    'ngSanitize'
]).config(function ($routeProvider) {

    'use strict';
    
    $routeProvider
        .when('/inbox', {
            templateUrl: 'views/inbox.html',
            controller: 'InboxCtrl',
            controllerAs: 'inbox'
        })
        .when('/inbox/email/:id', {
            templateUrl: 'views/email.html',
            controller: 'EmailCtrl',
            controllerAs: 'email'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
        .otherwise({
            redirectTo: '/login'
        });
}).run(function ($rootScope) {
    $rootScope.$on('$routeChangerError', function (event, current, 
        previous, rejection) {
            console.log(event, current, previous, rejection);
    })
});