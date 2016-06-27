angular
    .module('app')
    .factory('basket', basket);

function basket($http) {
    return {
        getProducts: getProducts
    };

    function getProducts(){
        return $http.get('/api/basket');
    }
}