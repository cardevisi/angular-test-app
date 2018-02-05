angular.module('forms', []).directive('userForm', function() {
    var ddo = {};
    ddo.controller = 'Users';
    ddo.templateUrl = './directives/form.template.html';
    return ddo;
})