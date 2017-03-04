var router = require('express').Router();
var path = require('path');
var secrets = require('./secrets.js');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: secrets.gmailAddress,
        pass: secrets.gmailPass
    }
});


//Routes
//Home route
router.get('/', function(request, response) {
    response.status(202).sendFile(path.resolve("app/index.html"));
});

router.post('/contactForm', function(req, res) {
    console.log("+++ 14 routes.js req.body: ", req.body)


    var mailOptions = {
        from: req.body.email,
        to: secrets.gmailAddress,
        subject: 'Message from ' + req.body.name,
        text: req.body.name + " " + req.body.email + " " + req.body.position + " " + req.body.difficulty + " " + req.body.link
    }

    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log("error");
            console.log(error);
            res.send(error);
        } else {
            console.log("Message sent: " + response.message);
            res.send(response);
        }
    });


});

module.exports = router;
