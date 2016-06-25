angular
    .module('app')
    .controller('shopCtrl', shopCtrl);

function shopCtrl(shop) {
    var vm = this;

    init();


    function init(){
        getProducts();
    }

    function getProducts(){
        shop.getProducts().then(function(res){
            vm.products = res.data;
            console.log(vm.products);
        })
    }
}