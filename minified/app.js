//twitterApp is dependent on the myApp.services module
var app = angular.module('app', [
    'ui.router',
    'ngLodash',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
]);

var sharedDirectives = angular.module('sharedDirectives', []);

app.controller('appCtrl', function($scope, $rootScope, $location, lodash, alert, confirm) {
    $rootScope.locationUrl = 'http://localhost:8080';
    // $rootScope.locationUrl = 'http://acrogenerator.com';

    $scope.alert = alert;

    $scope.confirm = confirm;
    $scope.currentYear = moment().format('YYYY')
})

//Main route serving site template
app.config(function($stateProvider, $urlRouterProvider) {
    // Now set up the states
    $stateProvider
        .state('/', {
            url: '/?list',
            templateUrl: 'app/root/index.html',
            controller: 'rootController'
        })
        .state('/contact', {
            url: '/contact',
            templateUrl: 'app/contact/contact.html',
            controller: 'contactController'
        })

    .state('/positions', {
        url: '/positions',
        templateUrl: 'app/positions/positions.html',
        controller: 'positionsController'
    })

    $urlRouterProvider.otherwise("/");
})

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

var app = angular.module('app');

app.controller('positionsController', function($scope, positionsServices) {
    $scope.positions = positionsServices.positionsList;
})
var app = angular.module('app');

app.factory('positionsServices', function($http, $rootScope) {
    var services = {};

    services.positionsList = [{
            "name": "Bird",
            "difficulty": "beginner",
            "on": "hands and feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/bird.jpg"
        }, {
            "name": "Reverse Bird",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/reversebird.jpg"
        }, {
            "name": "Throne",
            "difficulty": "beginner",
            "on": "hands and feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/throne.jpg"
        }, {
            "name": "Straddle Throne",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 2.0,
            "image": "/app/assets/images/straddlethrone.jpg"
        }, {
            "name": "Reverse Straddle Throne",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 2.0,
            "image": "/app/assets/images/reversestraddlethrone.jpg"
        }, {
            "name": "Vishnu\'s Couch",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/vishnuscouch.jpg"
        }, {
            "name": "High-Flying Whale",
            "difficulty": "beginner",
            "on": "hands and feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/highflyingwhale.jpg"
        }, {
            "name": "Side Star",
            "difficulty": "intermediate",
            "on": "hands and feet",
            "inverted": false,
            "rating": 2.0,
            "image": "/app/assets/images/sidestar.jpg"
        }, {
            "name": "Star",
            "difficulty": "intermediate",
            "on": "hands and feet",
            "inverted": true,
            "rating": 2.0,
            "image": "/app/assets/images/star.jpg"
        }, {
            "name": "Shoulder Stand",
            "difficulty": "intermediate",
            "on": "hands",
            "inverted": true,
            "rating": 3.0,
            "image": "/app/assets/images/shoulderstand.jpg"
        }, {
            "name": "Supported Shoulder Stand",
            "difficulty": "beginner",
            "on": "hands and feet",
            "inverted": true,
            "rating": 1.0,
            "image": "/app/assets/images/supportedshoulderstand.jpg"
        }, {
            "name": "Reverse Shoulder Stand",
            "difficulty": "intermediate",
            "on": "hands and feet",
            "inverted": true,
            "rating": 3.0,
            "image": "/app/assets/images/reverseshoulderstand.jpg"
        }, {
            "name": "Candlestick",
            "difficulty": "beginner",
            "on": "hands and feet",
            "inverted": true,
            "rating": 1.0,
            "image": "/app/assets/images/candlestick.jpg"
        }, {
            "name": "Back Bird",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/backbird.jpg"
        }, {
            "name": "Bat",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": true,
            "rating": 1.0,
            "image": "/app/assets/images/bat.jpg"
        }, {
            "name": "Floating Pashi",
            "difficulty": "intermediate",
            "on": "hands",
            "inverted": true,
            "rating": 3.0,
            "image": "/app/assets/images/floatingpashi.jpg"
        }, {
            "name": "Folded Leaf",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": true,
            "rating": 1.0,
            "image": "/app/assets/images/foldedleaf.jpg"
        }, {
            "name": "Foot-to-Hand",
            "difficulty": "intermediate",
            "on": "hands",
            "inverted": false,
            "rating": 4.0,
            "image": "/app/assets/images/foottohand.jpg"
        }, {
            "name": "Extended Reverse Foot-to-Hand",
            "difficulty": "advanced",
            "on": "hands",
            "inverted": false,
            "rating": 3.0,
            "image": "/app/assets/images/extendedreversefoottohand.jpg"
        }, {
            "name": "Reverse Foot-to-Hand",
            "difficulty": "intermediate",
            "on": "hands",
            "inverted": false,
            "rating": 4.0,
            "image": "/app/assets/images/reversefoottohand.jpg"
        },
        {
            "name": "Shin-to-Foot",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/shintofoot.jpg"
        }, {
            "name": "Reverse Shin-to-Foot",
            "difficulty": "intermediate",
            "on": "feet",
            "inverted": false,
            "rating": 2.0,
            "image": "/app/assets/images/reverseshintofoot.jpg"
        }, {
            "name": "Foot-to-Shin",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/foottoshin.jpg"
        }, {
            "name": "Foot-to-Foot",
            "difficulty": "intermediate",
            "on": "feet",
            "inverted": false,
            "rating": 2.0,
            "image": "/app/assets/images/foottofoot.jpg"
        },
        {
            "name": "Extended Hand-to-Hand",
            "difficulty": "advanced",
            "on": "hands",
            "inverted": true,
            "rating": 4.0,
            "image": "/app/assets/images/extendedhandtohand.jpg"
        }, {
            "name": "Couch",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 2.0,
            "image": "/app/assets/images/couch.jpg"
        }, {
            "name": "Secretary",
            "difficulty": "beginner",
            "on": "feet",
            "inverted": false,
            "rating": 1.0,
            "image": "/app/assets/images/secretary.jpg"
        }, {
            "name": "Reverse Secretary",
            "difficulty": "intermediate",
            "on": "feet",
            "inverted": false,
            "rating": 2.0,
            "image": "/app/assets/images/reversesecretary.jpg"
        }, {
            "name": "Reverse Star",
            "difficulty": "intermediate",
            "on": "feet",
            "inverted": true,
            "rating": 3.0,
            "image": "/app/assets/images/reversestar.jpg"
        }, {
            "name": "Tittibhasana",
            "difficulty": "advanced",
            "on": "hands",
            "inverted": false,
            "rating": 4.0,
            "image": "/app/assets/images/tittibhasana.jpg"
        }, {
            "name": "Floating Camel",
            "difficulty": "advanced",
            "on": "hands",
            "inverted": false,
            "rating": 4.0,
            "image": "/app/assets/images/floatingcamel.jpg"
        }, {
            "name": "Croc",
            "difficulty": "advanced",
            "on": "hands",
            "inverted": false,
            "rating": 5.0,
            "image": "/app/assets/images/croc.jpg"
        }, {
            "name": "Bicep Stand",
            "difficulty": "intermediate",
            "on": "feet",
            "inverted": true,
            "rating": 3.0,
            "image": "/app/assets/images/bicepstand.jpg"
        }, {
            "name": "Hand to Hand",
            "difficulty": "advanced",
            "on": "hands",
            "inverted": true,
            "rating": 5.0,
            "image": "/app/assets/images/handtohand.jpg"
        }, {
            "name": "Mono Side Back Bird",
            "difficulty": "advanced",
            "on": "feet",
            "inverted": false,
            "rating": 4.0,
            "image": "/app/assets/images/freesidebackbird.jpg"
        }, {
            "name": "Reverse Back Plank on Hands",
            "difficulty": "intermediate",
            "on": "hands",
            "inverted": false,
            "rating": 2.0,
            "image": "/app/assets/images/reversebackplankonhands.jpg"
        }
    ];

    return services;
})
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

var app = angular.module('app');

app.factory('alert', function() {
    var services = {};
    
    services.alerts = [];

    services.addAlert = function(message, type) {
        services.alerts.push({ 
            message: message,
            type: type
        });
    };

    services.closeAlert = function(index) {
        services.alerts.splice(index, 1);
    };

    return services;
})

var app = angular.module('app');

app.factory('confirm', function($uibModal) {
    var service = {};
    service.initialize = function(message, onYes) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'app/shared_templates/confirm.html',
            controller: 'confirm',
            size: 'sm',
            resolve: {
                message: function() {
                    return message;
                },
                onYes: function () {
                    return onYes;
                }
            }
        });
    }

    return service;
})

app.controller('confirm', function ($scope, $uibModalInstance, message, onYes) {
    $scope.cancel = function() {
        $uibModalInstance.close();
    };

    $scope.proceed = function() {
        $uibModalInstance.close();
        onYes();
    }

    $scope.message = message;
});

var app = angular.module('app');

app.factory('ngClipboard', function($compile, $rootScope, $document) {
    return {
        toClipboard: function(element) {

            var copyElement = angular.element('<span id="ngClipboardCopyId">' + element + '</span>');
            var body = $document.find('body').eq(0);
            body.append($compile(copyElement)($rootScope));

            var ngClipboardElement = angular.element(document.getElementById('ngClipboardCopyId'));
            console.log(ngClipboardElement);
            var range = document.createRange();

            range.selectNode(ngClipboardElement[0]);

            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);

            var successful = document.execCommand('copy');

            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            window.getSelection().removeAllRanges();

            copyElement.remove();
        }
    }
})
