var app = angular.module('app');

app.controller('rootController', function($scope, rootServices, alert) {
    $scope.formData = {};
    $scope.formData.level = "all"

    $scope.$watch('formData', function() {
        if($scope.formData.numberInput === 0 || $scope.formData.numberInput === "" || $scope.formData.numberInput === undefined || $scope.formData.numberInput === null){
            $scope.randomList = [];
        }
        if($scope.formData.numberInput > 0 && $scope.formData.numberInput < 2){
            alert.addAlert("You want to move, right? Pick more than 1")
            return;
        }
        if($scope.formData.numberInput > 8){
            alert.addAlert("Take it easy, champ. Pick less than 10")
            return;
        }
        if ($scope.formData.numberInput) {
            var randomNumberList = [];
            var filteredList = [];
            $scope.randomList = [];
            if ($scope.formData.level !== "all") {
                filteredList = _.filter(rootServices.positionsList, function(item) {
                    return item.difficulty === $scope.formData.level;
                });
            } else {
                filteredList = rootServices.positionsList;
            }

            _.times($scope.formData.numberInput, function(){
                $scope.randomList.push(filteredList[_.random(0, filteredList.length - 1)])
            });
        }
    }, true)
});
