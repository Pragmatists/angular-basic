describe('Shop controller: ', function () {
    var ctrl, $httpBackend, $scope, $rootScope;

    var productMock = {
        id: 1,
        name: 'name',
        price: 13
    };

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, _$rootScope_, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        ctrl = $controller('shopCtrl', {$scope: $scope});

        $httpBackend.when('GET', '/api/products').respond(productMock);
        $httpBackend.when('GET', 'templates/login.tpl.html').respond({});
        $httpBackend.when('POST', 'api/basket').respond({});
    }));

    it('load applications', function () {
        $httpBackend.expectGET('/api/products');

        $httpBackend.flush();
        $scope.$apply();

        expect(ctrl.products).toEqual(productMock);
    });

    it('send product to basketgit ', function () {
        $httpBackend.expectPOST('/api/basket', productMock).respond(201, '');
        spyOn($rootScope, '$broadcast').and.callThrough();

        ctrl.addToBasket(productMock);

        $scope.$apply();
        $httpBackend.flush();

        expect($rootScope.$broadcast).toHaveBeenCalledWith('basket.update');
    });

});