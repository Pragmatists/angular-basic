angular
    .module('app')
    .controller('basketCtrl', basketCtrl);

function basketCtrl(basket, $scope) {
    var vm = this;

    init();

    function init(){
        loadBasket();
    }


    $scope.$on('basket.update', function(){
        loadBasket();
    });

    function loadBasket(){
        basket.getProducts().then(function(res){
            vm.products = res.data;
        })
    }

}