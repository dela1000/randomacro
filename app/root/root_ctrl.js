var app = angular.module('app');

app.controller('rootController', function($scope, $window, positionsServices, alert) {
    $scope.formData = {};
    $scope.formData.diff = {
        beginner: true,
        intermediate: false,
        advanced: false
    };
    $scope.formData.numberInput = "4";


    $scope.levelAll = function() {
        $window.scrollTo(0, 0);
        $scope.formData.all = true;
        $scope.formData.diff.beginner = false;
        $scope.formData.diff.intermediate = false;
        $scope.formData.diff.advanced = false;
    }


    $scope.levelSelect = function(level) {
        $window.scrollTo(0, 0);
        $scope.formData.all = false;
        
        if ($scope.formData.diff[level] === false) {
            $scope.formData.diff[level] = true;
        } else {
            $scope.formData.diff[level] = false;
        }
    }

    $scope.$watch('formData.numberInput', function() {
        selectPositions();
    })

    $scope.$watch('formData.all', function() {
        if ($scope.formData.all) {
            $scope.formData.diff.beginner = false;
            $scope.formData.diff.intermediate = false;
            $scope.formData.diff.advanced = false;
        }

        runSelectPositions();
    }, true)

    $scope.$watchGroup(['formData.diff.beginner', 'formData.diff.intermediate', 'formData.diff.advanced'], function() {
        if ($scope.formData.diff.beginner || $scope.formData.diff.intermediate || $scope.formData.diff.advanced) {
            $scope.formData.all = false;
        }

        if ($scope.formData.diff.beginner && $scope.formData.diff.intermediate && $scope.formData.diff.advanced) {
            $scope.formData.diff = {};
        }

        if (!$scope.formData.diff.beginner && !$scope.formData.diff.intermediate && !$scope.formData.diff.advanced) {
            $scope.formData.all = true;
        }

        runSelectPositions();
    }, true)


    function runSelectPositions() {
        if ($scope.formData.diff.beginner || $scope.formData.diff.intermediate || $scope.formData.diff.advanced || $scope.formData.all) {
            selectPositions();
        } else {
            $scope.filteredList = [];
            initVars();
        };
    };

    var selectPositions = function() {
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
        if ($scope.formData.numberInput) {

            $scope.filteredList = [];
            //clear current data
            initVars();
            //if all is selected, use all the positions on the list
            if ($scope.formData.all) {
                $scope.filteredList = positionsServices.positionsList;
            }
            //if any of the difficulty levels is selected, filter the position list by the difficulty's selected
            if ($scope.formData.diff.beginner === true || $scope.formData.diff.intermediate === true || $scope.formData.diff.advanced === true) {
                var holder = [];
                _.forEach($scope.formData.diff, function(level, index) {
                    if (level === true) {
                        holder.push(_.filter(positionsServices.positionsList, function(item) {
                            return item.difficulty === index;
                        }))
                    }
                })
                $scope.filteredList = _.flattenDeep(holder)
            }
            //Number of possible positions
            $scope.possiblePositions = $scope.filteredList.length;
            //randomize the final list
            var tempRandomizedList = _.shuffle($scope.filteredList);
            //Depending on what numberInput the user selected, add up to 4 items in each positionHolder, and push rating to ratings scope
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
            //per each positionHolder, set the appropriate class to display the pills correctly width-wise
            _.forEach($scope.positionHolder, function(list) {
                    assignPillClass(list, list.length);
                })
                //find the mean of all the selected the ratings
            $scope.difficultyRating = _.mean($scope.ratings);
        }
    };
    // HELPER FUNCTIONS
    //Clear all the list and rating variables
    var initVars = function() {
        $scope.positionHolder = {
            firstRowList: [],
            secondRowList: [],
            thirdRowList: []
        };

        $scope.ratings = [];
        $scope.difficultyRating = null;
        $scope.possiblePositions = null;
    };
    //assign the correct class depending on how many items are in each positionHolder
    var assignPillClass = function(collection, length) {
        if (length === 1) {
            _.forEach(collection, function(item) {
                item.class = "col-md-offset-4 col-md-4"
            })
        }
        if (length === 2) {
            _.forEach(collection, function(item) {
                item.class = "col-md-offset-2 col-md-3";
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
