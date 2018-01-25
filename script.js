var btn = document.querySelector("#start-quiz");
var catagory = document.querySelector('#catagory');
var type = document.querySelector('#type');
var difficulty = document.querySelector('#difficulty');
var question = document.querySelector('#question');
var multiplechoice = document.querySelector('#multiplechoice');

//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
	 catagory.innerHTML = 'Category: ' + data.results[0].category;
	 type.innerHTML = 'Type: ' + data.results[0].type;
	 difficulty.innerHTML = 'Difficulty: ' + data.results[0].difficulty;
	 question.innerHTML = 'Question: ' + data.results[0].question;
    }
  }
  console.log('getting api...');
  XHR.open("GET", 'https://opentdb.com/api.php?amount=10');
  XHR.send();
});



$(document).ready(function(){
   
	$('#start-quiz').click(function(){
		$('button').fadeOut(3000);
		$('#board').fadeIn(3000);
		$('#catagory').fadeIn(6000);
	});

});






