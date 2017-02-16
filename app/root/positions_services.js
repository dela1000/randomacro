var app = angular.module('app');

app.factory('positionsServices', function($http, $rootScope) {
    var services = {};

    services.positionsList = [{
        "name": "Bird",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": false,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Throne",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": false,
        "rating": 1.0,
        "image": ""
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
        "image": ""
    }, {
        "name": "Vishnu\'s Couch",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "High-Flying Whale",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": false,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Side Star",
        "difficulty": "intermediate",
        "on": "hands and feet",
        "inverted": false,
        "rating": 2.0,
        "image": ""
    }, {
        "name": "Star",
        "difficulty": "intermediate",
        "on": "hands and feet",
        "inverted": true,
        "rating": 2.0,
        "image": ""
    }, {
        "name": "Shoulder Stand",
        "difficulty": "intermediate",
        "on": "hands",
        "inverted": true,
        "rating": 3.0,
        "image": ""
    }, {
        "name": "Supported Shoulder Stand",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": true,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Reverse Shoulder Stand",
        "difficulty": "intermediate",
        "on": "hands and feet",
        "inverted": true,
        "rating": 3.0,
        "image": "/app/assets/images/reverseshoulderstand.jpg"
    }, {
        "name": "Cathedral",
        "difficulty": "beginner",
        "on": "hands and feet",
        "inverted": true,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Back Bird",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Straddle Bat",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": true,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Floating Paschi",
        "difficulty": "intermediate",
        "on": "hands",
        "inverted": true,
        "rating": 3.0,
        "image": "/app/assets/images/floatingpaschi.jpg"
    }, {
        "name": "Folded Leaf",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": true,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Foot-to-Hand",
        "difficulty": "intermediate",
        "on": "hands",
        "inverted": false,
        "rating": 4.0,
        "image": ""
    }, {
        "name": "Extended Foot-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": false,
        "rating": 3.0,
        "image": ""
    }, {
        "name": "Reverse Foot-to-Hand",
        "difficulty": "intermediate",
        "on": "hands",
        "inverted": false,
        "rating": 4.0,
        "image": ""
    }, {
        "name": "Reverse Extended Foot-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": false,
        "rating": 3.0,
        "image": ""
    }, {
        "name": "Shin-to-Foot",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Reverse Shin-to-Foot",
        "difficulty": "intermediate",
        "on": "feet",
        "inverted": false,
        "rating": 2.0,
        "image": ""
    }, {
        "name": "Foot-to-Shin",
        "difficulty": "beginner",
        "on": "feet",
        "inverted": false,
        "rating": 1.0,
        "image": ""
    }, {
        "name": "Foot-to-Foot",
        "difficulty": "intermediate",
        "on": "feet",
        "inverted": false,
        "rating": 2.0,
        "image": "/app/assets/images/foottofoot.jpg"
    }, {
        "name": "Reverse Foot-to-Foot",
        "difficulty": "advanced",
        "on": "feet",
        "inverted": false,
        "rating": 4.0,
        "image": ""
    }, {
        "name": "Baby Hand-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": true,
        "rating": 3.0,
        "image": ""
    }, {
        "name": "Hand-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": true,
        "rating": 4.0,
        "image": ""
    }, {
        "name": "Couch",
        "difficulty": "intermediate",
        "on": "feet",
        "inverted": false,
        "rating": 2.0,
        "image": ""
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
        "image": ""
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
        "image": ""
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
        "image": ""
    }, {
        "name": "Bicep Stand",
        "difficulty": "intermediate",
        "on": "feet",
        "inverted": true,
        "rating": 3.0,
        "image": ""
    }];


    return services;
})
