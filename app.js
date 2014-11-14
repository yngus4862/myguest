var express=require('express');
var morgan=require('morgan');
var bodyParser=require('body-parser');
var methodOverride=require('method-override');
var mongoose=require("mongoose");
var app=express();

app.use(express.static(__dirname+'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());
// # 3
routes = require('./routes/guest')(app);

mongoose.connect('mongodb://localhost/guest',function(err,res){
	if(err) console.log('MongoDB 연결 에러'+err);
	else console.log('MongoDB 연결 성공');
});

app.listen(8080);
console.log('나 8080 포트에서 돌아간다!');

app.get('/',function(req,res){
	res.send("안녕 세상!");
});
app.get('/hello',function(req,res){
	res.send("hello world!");
});
app.get('/hello/world',function(req,res){
	res.send("hello world! 231");
});
