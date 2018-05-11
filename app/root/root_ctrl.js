var app = angular.module('app');

app.controller('rootController', function($scope, $window, $stateParams, positionsServices, alert, ngClipboard,$location, $anchorScroll) {
    $scope.formData = {};

    $scope.showNav = true;
    $scope.hideNavigation = () => {
        $scope.showNav = !$scope.showNav;
    }

    $scope.numbers = _.range(2, 11);

    _.forEach($scope.numbers, (number, index) => {
        $scope.numbers[index] = {
            number: number
        }
    })

    $scope.numberSelected = (number) => {
        console.log("+++ 20 root_ctrl.js number: ", number)
        $scope.formData.numberInput = number
    }

    $scope.levelAll = () => {
        $window.scrollTo(0, 0);
        $scope.formData.all = true;
        $scope.formData.diff.beginner = false;
        $scope.formData.diff.intermediate = false;
        $scope.formData.diff.advanced = false;
    }

    $scope.levelSelect = (level) => {
        $window.scrollTo(0, 0);
        $scope.formData.all = false;

        if ($scope.formData.diff[level] === false) {
            $scope.formData.diff[level] = true;
        } else {
            $scope.formData.diff[level] = false;
        }
    }

    $scope.$watch('formData.all', () => {
        if ($scope.formData.all) {
            $scope.formData.diff.beginner = false;
            $scope.formData.diff.intermediate = false;
            $scope.formData.diff.advanced = false;
        }
    }, true)

    $scope.$watchGroup(['formData.diff.beginner', 'formData.diff.intermediate', 'formData.diff.advanced'], () => {
        if ($scope.formData.diff.beginner || $scope.formData.diff.intermediate || $scope.formData.diff.advanced) {
            $scope.formData.all = false;
        }

        if ($scope.formData.diff.beginner && $scope.formData.diff.intermediate && $scope.formData.diff.advanced) {
            $scope.formData.diff = {};
        }

        if (!$scope.formData.diff.beginner && !$scope.formData.diff.intermediate && !$scope.formData.diff.advanced) {
            $scope.formData.all = true;
        }
    }, true)

    $scope.saveList = () => {
        var arrays = [];
        _.forEach($scope.positionHolder, (array) => {
            arrays.push(array)
        })
        var flattenArray = _.flattenDeep(arrays);

        var indexesSelected = "";
        _.forEach(flattenArray, (selectedPosition) => {
            _.forEach(positionsServices.positionsList, (positionInList, index) => {
                if (selectedPosition.name === positionInList.name) {
                    indexesSelected += index + ","
                }
            })
        })
        indexesSelected = indexesSelected.slice(0, -1);
        $scope.link = "http://acrogenerator.com/#!/?list=" + indexesSelected;

        ngClipboard.toClipboard($scope.link);
        alert.addAlert('A link to this flow has been added to your clipboard. You may save or share it.', "calm")
    }

    $scope.lockList = () => {
        $scope.locked = !$scope.locked;
    }

    $scope.refresh = () => {
        if ($scope.formData.numberInput === 1) {
            $scope.formData.numberInput = 4;
        }
        runSelectPositions();
    }

     runSelectPositions = () => {
        if ($scope.locked) {
            return;
        }

        if ($scope.formData.diff.beginner || $scope.formData.diff.intermediate || $scope.formData.diff.advanced || $scope.formData.all) {
            selectPositions();
        } else {
            $scope.filteredList = [];
            initVars();
        };
    };

    var selectPositions = () => {
        if ($scope.locked) {
            return;
        }
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
            alert.addAlert("Take it easy, champ. Pick less than 10", "warning")
            return;
        }

        $location.hash('top');
        $anchorScroll();
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
                _.forEach($scope.formData.diff, (level, index) => {
                    if (level === true) {
                        holder.push(_.filter(positionsServices.positionsList, (item) => {
                            return item.difficulty === index;
                        }))
                    }
                })
                $scope.filteredList = _.flattenDeep(holder)
            }
            //Number of possible positions
            $scope.possiblePositions = $scope.filteredList.length;
            //randomize the final list
            var randomizedList = _.shuffle($scope.filteredList);
            //Depending on what numberInput the user selected, add up to 4 items in each positionHolder, and push rating to ratings scope
            $scope.loadBuckets(randomizedList)
        }
    };

    $scope.loadBuckets = (list, length) => {
        var times;
        if (length) {
            times = length;
        } else {
            times = $scope.formData.numberInput;
        };
        _.times(times, (index) => {
            if (index <= 3) {
                $scope.positionHolder.firstRowList.push(list[index])
                $scope.ratings.push(list[index].rating)
            } else if (index > 3 && index <= 7) {
                $scope.positionHolder.secondRowList.push(list[index])
                $scope.ratings.push(list[index].rating)
            } else {
                $scope.positionHolder.thirdRowList.push(list[index])
                $scope.ratings.push(list[index].rating)
            };
        });
        //per each positionHolder, set the appropriate class to display the pills correctly width-wise
        _.forEach($scope.positionHolder, (list) => {
                assignPillClass(list, list.length);
            })
            //find the mean of all the selected the ratings
        $scope.difficultyRating = _.mean($scope.ratings);
    }

    // HELPER => S
    //Clear all the list and rating variables
    var initVars = () => {
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
    var assignPillClass = (collection, length) => {
        if (length === 1) {
            _.forEach(collection, (item) => {
                item.class = "col-md-offset-4 col-md-4"
            })
        }
        if (length === 2) {
            _.forEach(collection, (item) => {
                item.class = "col-md-offset-2 col-md-3";
            })
        }
        if (length === 3) {
            _.forEach(collection, (item) => {
                item.class = "col-md-4";
            })
        }
        if (length >= 4) {
            _.forEach(collection, (item) => {
                item.class = "col-md-3";
            })
        }
    }

    $scope.formData.diff = {};

    if ($stateParams.list) {
        initVars();
        var loadedList = [];
        var test = $stateParams.list.split(",");

        _.forEach(test, (listIndex) => {
            var digit = Number(listIndex);
            if (digit !== NaN) {
                _.forEach(positionsServices.positionsList, (position, index) => {
                    if (index === digit) {
                        loadedList.push(position)
                    }
                })
            }
        })
        $scope.showNav = false;
        $scope.formData.numberInput = loadedList.length;
        $scope.loadBuckets(loadedList, loadedList.length)
    } else {
        $scope.formData.numberInput = "4";
        $scope.formData.diff = {
            beginner: true,
            intermediate: false,
            advanced: false
        };
        runSelectPositions();
    };
});
