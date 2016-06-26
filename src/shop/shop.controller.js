angular
    .module('app')
    .controller('shopCtrl', shopCtrl);

function shopCtrl(shop, $rootScope) {
    var vm = this;

    vm.addToBasket = addToBasket;

    init();


    function init() {
        getProducts();

    }

    function getProducts() {
        shop.getProducts().then(function (res) {
            vm.products = parseProducts(res.data);
        })
    }

    function addToBasket(product) {
        product.basket = true;

    }

    function parseProducts(products) {
        return _.forEach(products, function (value, key) {
            value.basket = false;
            value.price = parseInt(value.price);
        });
    }

}