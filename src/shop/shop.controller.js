angular
    .module('app')
    .controller('shopCtrl', shopCtrl);

function shopCtrl(shop, $rootScope) {
    var vm = this;

    vm.addToBasket = addToBasket;

    init();


    function init(){
        getProducts();

    }

    function getProducts(){
        shop.getProducts().then(function(res){
            vm.products = addBasketParameter(res.data);
        })
    }

    function addToBasket(product){
        shop.addToBasket(product).then(function () {
            product.basket = true;
            $rootScope.$broadcast('basket.update');
        })
    }

    function addBasketParameter(products){
        return _.forEach(products, function(value, key) {
            value.basket = false;
        });
    }
}