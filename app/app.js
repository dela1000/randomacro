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
            url: '/',
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
