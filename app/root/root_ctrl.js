var app = angular.module('app');

app.controller('rootController', function($scope, positionsServices, alert) {
    $scope.formData = {};
    $scope.formData.level = "beginner";
    $scope.formData.numberInput = "4";

    $scope.$watch('formData', function() {
        //If there is no numberInput data, clear variables and return
        if ($scope.formData.numberInput === 0 || $scope.formData.numberInput === "" || $scope.formData.numberInput === undefined || $scope.formData.numberInput === null) {
            initVars();
            return;
        }
        //if there numberInput is 1, do nothing
        if ($scope.formData.numberInput > 0 && $scope.formData.numberInput < 2) {
            return;
        }
        //If numberInput is bigger than 10, alert to use a smaller number
        if ($scope.formData.numberInput > 10) {
            alert.addAlert("Take it easy, champ. Pick less than 10")
            return;
        }
        //if numberInput is valid and level is selected display data
        if ($scope.formData.numberInput && $scope.formData.level) {
            var filteredList = [];
            //clear current data
            initVars();
            //select what position list you want to use
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
                    $scope.positionHolder.firstRowList.push(tempRandomizedList[index])
                    $scope.ratings.push(tempRandomizedList[index].rating)
                } else if (index > 3 && index <= 7) {
                    $scope.positionHolder.secondRowList.push(tempRandomizedList[index])
                    $scope.ratings.push(tempRandomizedList[index].rating)
                } else {
                    $scope.positionHolder.thirdRowList.push(tempRandomizedList[index])
                    $scope.ratings.push(tempRandomizedList[index].rating)
                };
            });

            _.forEach($scope.positionHolder, function(list) {
                assignPillClass(list, list.length);
            })
            
            $scope.difficultyRating = _.mean($scope.ratings)
        }
    }, true)

    var initVars = function() {
        $scope.positionHolder = {
            firstRowList: [],
            secondRowList: [],
            thirdRowList: []
        };

        $scope.ratings = [];
        $scope.difficultyRating = null;
        $scope.possiblePositions = null;
    }

    var assignPillClass = function(collection, length) {
        if (length === 1) {
            _.forEach(collection, function(item) {
                item.class = "col-md-12"
            })
        }
        if (length === 2) {
            _.forEach(collection, function(item) {
                item.class = "col-md-6";
            })
        }
        if (length === 3) {
            _.forEach(collection, function(item) {
                item.class = "col-md-4";
            })
        }
        if (length >= 4) {
            _.forEach(collection, function(item) {
                item.class = "col-md-3";
            })
        }
    }
});
