
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var ejs = require('ejs');

var url = bodyParser.urlencoded({extended:false});

//reads the JSON files information
var data = fs.readFileSync('loginDatabase.json');
//postArr is extracting the incoming input and writing it to the JSON file
var postArr = JSON.parse(data);

var app = express();

//looks at the views folder thats static and everything to reference from
app.use(express.static("views")) 

//reads the EJS template
app.set('view engine', 'ejs')

// shows the html within the ejs file at the localhost
app.get('/quiz', function(require, response){
	response.render('index.ejs');

});


// handles user input and pushes the data into the obj array and writing it 
// to the JSON file as a string

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


// our local host port, displays "listening" in the terminal to ensure its working
app.listen(3000);
console.log("listening");

