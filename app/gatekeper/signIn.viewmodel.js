(function (app) {

    function signinViewModel() {
        var vm = {};
        vm.userName = "";
        vm.password = "";
        return vm;
    }

    app.factory('signinViewModel', [signinViewModel]);

})(angular.module('kendoTestApp'));
