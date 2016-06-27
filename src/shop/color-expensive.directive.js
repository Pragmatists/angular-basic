/* recommended */
angular
    .module('app')
    .directive('colorExpensive', colorExpensive);

function colorExpensive() {
    var directive = {
        link: link,
        restrict: 'A',
        scope: {
            price: '='
        }
    };
    return directive;

    function link(scope, element, attrs) {
        if(parseInt(scope.price) > 500) {
            element.addClass('product__price--expensive');
        }
    }
}