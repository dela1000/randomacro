var router = require('express').Router();
var path = require('path');


//Routes
//Home route
router.get('/', function(request, response) {
    response.status(202).sendFile(path.resolve("app/index.html"));
});

module.exports = router;
