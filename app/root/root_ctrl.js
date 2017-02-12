var app = angular.module('app');

app.controller('rootController', function($scope, rootServices) {
    $scope.formData = {};
    $scope.formData.level = "beginner"

    $scope.$watch('formData', function() {
        if ($scope.formData.numberInput) {
            var randomNumberList = [];
            var filteredList = [];
            $scope.randomList = [];
            if($scope.formData.level !== "all"){
                filteredList = _.filter(rootServices.positionsList, function(item) { 
                    return item.difficulty === $scope.formData.level; 
                });
            } else {
                filteredList = rootServices.positionsList;
            }
            
            for (i = 0; i < $scope.formData.numberInput; i++) {
                var randomNumbergenerated = _.random(0, filteredList.length-1);
                randomNumberList.push(randomNumbergenerated)
            }
            _.forEach(randomNumberList, function(number) {
                var temp = filteredList[number];
                $scope.randomList.push(temp)
            })
        }
    }, true)
});
