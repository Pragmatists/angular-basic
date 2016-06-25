var app = angular.module('app', ['ui.router', 'LocalStorageModule']);

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

app.run(function($rootScope, localStorageService, $state) {
    $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams, options){
            if(toState !== 'login' && localStorageService.get('login') === undefined){
                $state.go('login');
            }
        });
});
