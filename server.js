var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var router = express.Router();
var logger = require('morgan');
var nodemailer = require('nodemailer');
var Mailgun = require('mailgun').Mailgun;

var PORT = process.env.NODE_ENV || 8080;


app.use(logger ( 'dev' ));
// app.use('/', router);
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function(){
  console.log("Listening on " + PORT);
});




// var mg = new Mailgun('key-8f469d15520273679a514faa0b840318');

// mg.sendText('rcosmedeveloper@gmail.com', ['Recipient 1 <rolando.cosme@gmail.com>'],
//   'This is the subject - mailgun',
//   'This is the text - mailgun',
//   'noreply@example.com', {},
//   function(err) {
//     if (err) console.log('Oh noes: ' + err);
//     else     console.log('Success');
// });