var express = require('express');
var path = require('path');
var app = express();
var root = path.normalize(__dirname + '/..');
//config
 
app.set('views', __dirname + '');
app.engine('html', require('ejs').renderFile);
 
app.use(express.static(root + '/public'));
 
//routes
app.get('',function(req,res){
        res.render('../public/views/index.html')
});
 
app.env
//server
app.listen(process.env.PORT || 5000);
console.log('app live in 5000');

