var app = angular.module('app');

app.controller('contactController', function($scope, alert, $http) {

    // var urlLink = 'http://localhost:8080';
    var urlLink = 'http://acrogenerator.com';

    $scope.options = [{
        name: "position",
        id: "position"
    }, {
        name: "suggestion",
        id: "suggestion",
    }]

    $scope.selectionView = 'position';

    $scope.selectionMade = function(selection) {
        $scope.selectionView = selection;
    }

    $scope.sending = false;
    $scope.sendPositionMail = function() {
        $scope.sending = true;
        var data = {
            name: $scope.posForm.name,
            email: $scope.posForm.email,
            position: $scope.posForm.position,
            difficulty: $scope.posForm.difficulty,
            link: $scope.posForm.link
        };
        stringData = JSON.stringify(data);

        $http.post(urlLink + '/contactPositionForm', stringData)
            .then(function(result) {
                if (result.status === 200 && result.data.accepted.length > 0) {
                    alert.addAlert("We've sent your submission. Thanks!", "calm")
                    delete data;
                    delete $scope.posForm;
                } else {
                    alert.addAlert("There was an Error. Info was not sent", "warning")
                };
                $scope.sending = false;
            })
    }

    $scope.sendSuggestionMail = function() {
        $scope.sending = true;
        var data = {
            name: $scope.suggForm.name,
            email: $scope.suggForm.email,
            message: $scope.suggForm.message,
        };
        stringData = JSON.stringify(data);
        
        $http.post(urlLink + '/contactSuggestionForm', stringData)
            .then(function(result) {
                if (result.status === 200 && result.data.accepted.length > 0) {
                    alert.addAlert("We've sent your suggestion. Thanks!", "calm")
                    delete data;
                    delete $scope.suggForm;
                } else {
                    alert.addAlert("There was an Error. Info was not sent", "warning")
                };
                $scope.sending = false;
            })
    }
})
