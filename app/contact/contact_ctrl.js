var app = angular.module('app');

app.controller('contactController', function($scope, alert, $http) {

    $scope.sending = false;
    $scope.sendMail = function() {
        $scope.sending = true;
        var data = {
            name: $scope.name,
            email: $scope.email,
            position: $scope.position,
            difficulty: $scope.difficulty,
            link: $scope.link
        };
        stringData = JSON.stringify(data);

        $http.post('http://acrogenerator.com/contactForm', stringData)
            .then(function(result) {
                if(result.status === 200 && result.data.accepted.length > 0){
                    alert.addAlert("We've sent your submission. Thanks!", "calm")
                    delete data;
                    delete $scope.name;
                    delete $scope.email;
                    delete $scope.position;
                    delete $scope.difficulty;
                    delete $scope.link;
                } else{
                  alert.addAlert("There was an Error. Info was not sent", "warning")
                };
                $scope.sending = false;
            })
    }
})
