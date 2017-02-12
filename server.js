var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var router = require('./backend/routes.js');

var app = express();
module.exports.app = app;

//middleware
app.use(cors())
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serving static files from main directory.
app.use('/', express.static(__dirname));
// Set up backend routes
app.use("/", router);

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));