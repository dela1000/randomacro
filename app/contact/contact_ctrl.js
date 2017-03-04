var app = angular.module('app');

app.controller('contactController', function($scope, alert, $http) {


    $scope.sendMail = function() {
        var data = {
            name: $scope.name,
            email: $scope.email,
            position: $scope.position,
            difficulty: $scope.difficulty,
            link: $scope.link
        }
        $http.post('http://localhost:8080/contactForm', data)
            .then(function(result) {
                console.log("result: ", JSON.stringify(result, null, "\t"));
            })
    }
})
