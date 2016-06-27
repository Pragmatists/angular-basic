angular
    .module('app')
    .factory('user', user);

function user($http) {
    return {
        login: login
    };

    function login(){
        return $http.get('/api/user/');
    }
}