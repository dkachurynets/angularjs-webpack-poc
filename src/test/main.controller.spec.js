describe('MainController', function () {

    let $rootScope;
    let $controller;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
    }));

    it('should have a message property equal to "Hello, Angular 1.x with Webpack 5!"', function () {
        let scope = $rootScope.$new();
        let controller = $controller('MainController as main', { $scope: scope });
        expect(scope.main.message).toEqual('Hello, Angular 1.x with Webpack 5!');
    });
});
