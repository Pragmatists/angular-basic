angular
    .module('app')
    .factory('shop', shop);

function shop($http) {
    return {
        getProducts: getProducts
    };

    function getProducts(){
        return $http.get('/api/products');
    }
}