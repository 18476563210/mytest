//引入模块
var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
//创建App应用
var app = express();

//配置静态路由
app.use(express.static("public"));

//路由规则 
app.post("/contract",function(req,res){
	res.setHeader("content-type","text/html;charset=utf-8");
	res.end("用户反馈");
	var form = formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		console.log(fields);
		var username=fields.username;
		var pass=fields.pass;
		var email=fields.email;
		var sex=fields.sex;
		var hobby=fields.hobby;
		
		fs.writeFileSync("file.txt",username+"\n"+pass+"\n"+email+"\n"+sex+"\n"+hobby,"utf-8");
	})
	res.end();
});


app.listen(8081);
