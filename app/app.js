(function (angular) {

    var app = angular.module('kendoTestApp', ['kendo.directives']);

    app.config([
        '$compileProvider',
        function ($compileProvider) {
            $compileProvider.imgSrcSanitizationWhitelist('content/images/');
        }
    ]);

})(angular);