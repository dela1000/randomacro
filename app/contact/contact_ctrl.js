var app = angular.module('app');

app.controller('contactController', function($scope, alert) {
    

    $scope.test = function () {
      console.log("+++ 7 contact_ctrl.js $scope.form: ", $scope.form)
    }


    $scope.sendMail = function() {
        
    }
})