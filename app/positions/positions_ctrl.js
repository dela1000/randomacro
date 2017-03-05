var app = angular.module('app');

app.controller('positionsController', function($scope, positionsServices) {
    $scope.positions = positionsServices.positionsList;
})