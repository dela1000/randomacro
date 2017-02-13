var app = angular.module('app');

app.factory('positionsServices', function($http, $rootScope) {
    var services = {};

    services.positionsList = [{
        "name": "Bird",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": false,
        "rating": 1.0
    }, {
        "name": "Throne",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": false,
        "rating": 1.0
    }, {
        "name": "Straddle Throne",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 2.0
    }, {
        "name": "Reverse Straddle Throne",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 2.0
    }, {
        "name": "Vishnu\'s Couch",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 1.0
    }, {
        "name": "High-Flying Whale",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": false,
        "rating": 1.0
    }, {
        "name": "Side Star",
        "difficulty": "intermediate",
        "on": "hands and feet",
        "inverted": false,
        "rating": 2.0
    }, {
        "name": "Star",
        "difficulty": "intermediate",
        "on": "hands and feet",
        "inverted": true,
        "rating": 2.0
    }, {
        "name": "Shoulder Stand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": true,
        "rating": 4.0
    }, {
        "name": "Supported Shoulder Stand",
        "difficulty": "intermediate",
        "on": "hands and feet",
        "inverted": true,
        "rating": 2.0
    }, {
        "name": "Reverse Shoulder Stand",
        "difficulty": "advanced",
        "on": "hands and feet",
        "inverted": true,
        "rating": 4.0
    }, {
        "name": "Cathedral",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": true,
        "rating": 1.0
    }, {
        "name": "Back Bird",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 1.0
    }, {
        "name": "Straddle Bat",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": true,
        "rating": 1.0
    }, {
        "name": "Floating Poshi",
        "difficulty": "intermediate",
        "on": "hands",
        "inverted": true,
        "rating": 3.0
    }, {
        "name": "Folded Leaf",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": true,
        "rating": 1.0
    }, {
        "name": "Foot-to-Hand",
        "difficulty": "intermediate",
        "on": "hands",
        "inverted": false,
        "rating": 4.0
    }, {
        "name": "Extended Foot-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": false,
        "rating": 3.0
    }, {
        "name": "Reverse Foot-to-Hand",
        "difficulty": "intermediate",
        "on": "hands",
        "inverted": false,
        "rating": 4.0
    }, {
        "name": "Reverse Extended Foot-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": false,
        "rating": 3.0
    }, {
        "name": "Shin-to-Foot",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 1.0
    }, {
        "name": "Foot-to-Shin",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 1.0
    }, {
        "name": "Foot-to-Foot",
        "difficulty": "intermediate",
        "on": "feet",
        "inverted": false,
        "rating": 3.0
    }, {
        "name": "Hand-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": true,
        "rating": 4.0
    }, {
        "name": "Couch",
        "difficulty": "intermediate",
        "on": "feet",
        "inverted": false,
        "rating": 2.0
    }, {
        "name": "Reverse Star",
        "difficulty": "advanced",
        "on": "feet",
        "inverted": true,
        "rating": 3.0
    }, {
        "name": "Tittibhasana",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": false,
        "rating": 4.0
    }, {
        "name": "Floating Camel",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": false,
        "rating": 4.0
    }, {
        "name": "Croc",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": false,
        "rating": 5.0
    }, {
        "name": "Bicep Stand",
        "difficulty": "intermediate",
        "on": "feet",
        "inverted": true,
        "rating": 3.0
    }];


    return services;
})
