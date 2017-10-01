const path = require ('path');
const express = require ('express');
const server = express();

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




server.listen(server.get('port'), function(){
    console.log('server started on port ' + server.get('port'));
})
