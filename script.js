
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var ejs = require('ejs');

var url = bodyParser.urlencoded({extended:false});
var data = fs.readFileSync('loginDatabase.json');
var postArr = JSON.parse(data);

var app = express();

app.use(express.static("views"))

app.set('view engine', 'ejs')


app.get('/quiz', function(require, response){
	response.render('index.ejs', {'loginDatabase.json': require.loginInfo});



});



app.post('/quiz/add/', url, function(request, response){

	var emailinfo = request.body.emaillogin;
	var passwordinfo = request.body.passwordlogin;
  
    var obj = {}
    obj[emailinfo] = passwordinfo
      postArr.loginInfo.push(obj)
  fs.writeFile("./loginDatabase.json", JSON.stringify(postArr), (err) => {
   if (err) {
       console.error(err);
       return;
   };
   console.log("File has been created");
});

})



app.use(function(req, res, next){
    res.redirect('/quiz');
})

app.listen(8080);
console.log("listening");

