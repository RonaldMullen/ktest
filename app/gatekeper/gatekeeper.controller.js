(function (app) {

    function gatekeeperCtrl(signinViewModel) {
        var self = this;

        var kendoApp = window.kendo.mobile.application;

        self.signInViewModel = signinViewModel;

        self.signIn = function () {
            kendoApp.navigate('app/home/home.html');
        };

        self.signOn = function() {
            kendoApp.navigate('app/gatekeper/signon.html');
        };

        self.signOnComplete = function () {
            kendoApp.navigate('app/gatekeper/signon-complete.html');
        };

        self.signOut = function() {
            kendoApp.navigate('app/gatekeper/signin.html');
        }
    }

    app.controller('gatekeeperCtrl', ['signinViewModel', gatekeeperCtrl]);

})(angular.module('kendoTestApp'));
