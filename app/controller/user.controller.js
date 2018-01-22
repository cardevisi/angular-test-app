angular.module('app').controller('Users', ['$scope', function($scope) {
    $scope.company = {
        'address' : 'Rua Afonso Vidal',
        'phone' : '1190889-9090',
        'number' : '1000'
    };

    $scope.messageIsValid = function () {
        if ($scope.isValid) {
            $scope.message = 'Dados corretos!'
        } else {
            $scope.message = 'Dados incorretos, digite novamente';
        }
    };

    $scope.removeProperties = function(company, exclude){
        var exclude = exclude || [];
        $scope.company = _.omit(company, [exclude]);
    };
}]);
