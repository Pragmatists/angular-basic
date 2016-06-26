var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(false);

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.tpl.html',
            controller: 'loginCtrl',
            controllerAs: 'login'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'templates/shop.tpl.html',
            controller: 'shopCtrl',
            controllerAs: 'shop'
        });

    $urlRouterProvider.otherwise('/login');
});

