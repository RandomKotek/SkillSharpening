const path = require ('path');
const express = require ('express');
const server = express();
const bodyParser = require('body-parser');
const urlbodyParser = (bodyParser.urlencoded({ extended: false }))
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

server.set('port', process.env.PORT || 3000);

server.use('/path', express.static(path.join(__dirname, 'client')));
server.use('/dist', express.static(path.join(__dirname, 'dist')));

server.set('views', path.join(__dirname, 'server', 'views'));

server.set('view engine', 'pug');

server.get('/', function(req, res){
    res.render('home', {
        title: "Sakura"
    });
});

server.post('/thank-you', urlbodyParser, function(req, res){
    console.log(req.body.name)
    const msg = {
      to: 'stormyboy78090@gmail.com',
      from: 'test@test.com',
      subject: 'Submission Results',
      text: req.body.name,
      };
    sgMail.send(msg);
    res.render('thanks', {
        title: "Thanks!"
    });
});

server.listen(server.get('port'), function(){
    console.log('server started on port ' + server.get('port'));
})
