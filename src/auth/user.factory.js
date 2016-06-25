angular
    .module('app')
    .factory('user', user);

function user($http) {
    return {
        login: login
    };

    function login(){
        return $http.get('http://localhost:3000/user');
    }
}