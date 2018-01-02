var express = require('express'),
    app = express(),
    port = process.env.PORT,
    bodyParser = require('body-parser');
    
var todoRoute = require('./routes/todos');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));
   
app.get('/', function(req,res){
    res.sendFile("index.html");
});
app.use('/api/todos', todoRoute); 
app.listen(port, function(){
    console.log("The app is runnning on port "+ port);
});