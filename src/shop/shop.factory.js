angular
    .module('app')
    .factory('shop', shop);

function shop($http) {
    return {
        getProducts: getProducts,
        addToBasket: addToBasket
    };

    function getProducts(){
        return $http.get('/api/products');
    }

    function addToBasket(product){
        return $http.post('/api/basket', product);
    }
}