angular
    .module('app')
    .factory('shop', shop);

function shop($http) {
    return {
        getProducts: getProducts,
        addToBasket: addToBasket
    };

    function getProducts(){
        return $http.get('http://localhost:3000/products');
    }

    function addToBasket(product){
        return $http.post('http://localhost:3000/basket', product);
    }
}