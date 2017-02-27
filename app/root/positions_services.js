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
        "name": "Extended Foot-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": false,
        "rating": 3.0,
        "image": "/app/assets/images/extendedfoottohand.jpg"
    }, {
        "name": "Reverse Foot-to-Hand",
        "difficulty": "intermediate",
        "on": "hands",
        "inverted": false,
        "rating": 4.0,
        "image": "/app/assets/images/reversefoottohand.jpg"
    }, 
    // {
    //     "name": "Reverse Extended Foot-to-Hand",
    //     "difficulty": "advanced",
    //     "on": "hands",
    //     "inverted": false,
    //     "rating": 3.0,
    //     "image": ""
    // }, 
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
    // {
    //     "name": "Reverse Foot-to-Foot",
    //     "difficulty": "advanced",
    //     "on": "feet",
    //     "inverted": false,
    //     "rating": 4.0,
    //     "image": ""
    // }, 
    {
        "name": "Hand-to-Hand",
        "difficulty": "advanced",
        "on": "hands",
        "inverted": true,
        "rating": 4.0,
        "image": "/app/assets/images/handtohand.jpg"
    }, {
        "name": "Couch",
        "difficulty": "intermediate",
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
    }];

    return services;
})
