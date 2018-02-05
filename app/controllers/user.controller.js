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

    $scope.getList = function() {
        $scope.list = [{
        'entries' : {
            'date' :'04-02-2018',
            'taxes' : [
                10,
                3.18,
                4
            ] 
        }
        },{
            'entries' : {
                'date' :'04-02-2018',
                'taxes' : [
                    10,
                    3.18,
                    4
                ] 
            }
        }];
    };

    $scope.removeProperties = function(company, exclude){
        if(!company) return;
        var exclude = exclude || [];
        $scope.company = _.omit(company, exclude);
    };
}]);
