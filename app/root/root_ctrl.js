var app = angular.module('app');

app.controller('rootController', function($scope, positionsServices, alert) {
    $scope.formData = {};
    $scope.formData.level = "beginner";
    $scope.formData.numberInput = "4";

    $scope.$watch('formData', function() {
        if ($scope.formData.numberInput === 0 || $scope.formData.numberInput === "" || $scope.formData.numberInput === undefined || $scope.formData.numberInput === null) {
            initVars();
            return;
        }
        if ($scope.formData.numberInput > 0 && $scope.formData.numberInput < 2) {
            alert.addAlert("You want to move, right? Pick more than 1")
            return;
        }
        if ($scope.formData.numberInput > 12) {
            alert.addAlert("Take it easy, champ. Pick less than 12")
            return;
        }
        if ($scope.formData.numberInput && $scope.formData.level) {
            var filteredList = [];
            initVars();
            if ($scope.formData.level !== "all") {
                filteredList = _.filter(positionsServices.positionsList, function(item) {
                    return item.difficulty === $scope.formData.level;
                });
            } else {
                filteredList = positionsServices.positionsList;
            }
            $scope.possiblePositions = filteredList.length;

            var tempRandomizedList = _.shuffle(filteredList);

            _.times($scope.formData.numberInput, function(index) {
                if (index <= 3) {
                    $scope.firstRowList.push(tempRandomizedList[index])
                    $scope.ratings.push(tempRandomizedList[index].rating)
                } else if (index > 3 && index <= 7) {
                    $scope.secondRowList.push(tempRandomizedList[index])
                    $scope.ratings.push(tempRandomizedList[index].rating)
                } else {
                    $scope.thirdRowList.push(tempRandomizedList[index])
                    $scope.ratings.push(tempRandomizedList[index].rating)
                };
            });
            $scope.firstRowPillClass = assignPillClass($scope.firstRowList.length);
            $scope.secondRowPillClass = assignPillClass($scope.secondRowList.length);
            $scope.thirdRowPillClass = assignPillClass($scope.thirdRowList.length);
            $scope.difficultyRating = _.mean($scope.ratings)
        }
    }, true)

    var initVars = function() {
        $scope.firstRowList = [];
        $scope.secondRowList = [];
        $scope.thirdRowList = [];
        $scope.ratings = [];
        $scope.difficultyRating = null;
        $scope.possiblePositions = null;
    }

    var assignPillClass = function(length) {
        if (length === 1) {
            return "col-md-12";
        }
        if (length === 2) {
            return "col-md-6";
        }
        if (length === 3) {
            return "col-md-4";
        }
        if (length >= 4) {
            return "col-md-3";
        }
    }
});
