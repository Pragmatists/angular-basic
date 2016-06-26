/* recommended */
angular
    .module('app')
    .directive('doMagic', doMagic);

function doMagic() {
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
            element.addClass('expensive');
        }
    }
}