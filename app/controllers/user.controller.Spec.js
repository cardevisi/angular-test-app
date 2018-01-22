describe('Test group for User Controller', () => {

    var $controller, $rootScope;

    beforeEach(angular.mock.module('app'));
    
    beforeEach(inject(function( _$rootScope_ , _$controller_ ) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));
    
    describe('on messageIsValid', () => {
        it('should show corret message', () => {
            var $scope = $rootScope.$new();
            $scope.isValid = true;
            var controller = $controller('Users', { $scope: $scope });
            $scope.messageIsValid();
            expect($scope.message).toBe('Dados corretos!');
        });
        it('should show incorret message', () => {
            var $scope = $rootScope.$new();
            $scope.isValid = false;
            var controller = $controller('Users', { $scope: $scope });
            $scope.messageIsValid();
            expect($scope.message).toBe('Dados incorretos, digite novamente');
        });
    });

    describe('On removeProperties', () => {
        it('should remove properties from company', () => {
            var $scope = $rootScope.$new();
            var controller = $controller('Users', { $scope: $scope });
            $scope.company = {
                'address' : 'Rua Afonso Vidal',
                'phone' : '1190889-9090',
                'number' : '1000'
            };
            $scope.removeProperties($scope.company, [
                'number'
            ]);
            expect( $scope.company ).toEqual({
                'address' : 'Rua Afonso Vidal',
                'phone' : '1190889-9090'
            })
        });
        it('should remove properties from company', () => {
            var $scope = $rootScope.$new();
            var controller = $controller('Users', { $scope: $scope });
            $scope.removeProperties();
            expect( $scope.company ).toEqual({
                'address' : 'Rua Afonso Vidal',
                'phone' : '1190889-9090',
                'number' : '1000'
            })
        });
    });
});

