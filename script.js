var btn = document.querySelector("#start-quiz");
var catagory = document.querySelector('#catagory');
var type = document.querySelector('#type');
var difficulty = document.querySelector('#difficulty');
var question = document.querySelector('#question');
var multiplechoice = document.querySelector('#multiplechoice');
var a1 = document.querySelector('#a')
var b2 = document.querySelector('#b')
var c3 = document.querySelector('#c')
var d4 = document.querySelector('#d')
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
	 question.innerHTML = 'Question: ' + data.results[0].question
     console.log(data.results[0].correct_answer)
     console.log(data.results[0].incorrect_answers[2]);
     console.log(data.results[0].incorrect_answers[0]);
     console.log(data.results[0].incorrect_answers[1]);

    var arr = [a1.innerHTML = data.results[0].correct_answer,
     b2.innerHTML = data.results[0].incorrect_answers[2],
     c3.innerHTML = data.results[0].incorrect_answers[0],
     d4.innerHTML = data.results[0].incorrect_answers[1]];

     
     console.log(arr.shuffle());

    }
  }
  console.log('getting api...');
  XHR.open("GET", 'https://opentdb.com/api.php?amount=10');
  XHR.send();
});



$(document).ready(function(){
   
	$('#start-quiz').click(function(){
		$('#start-quiz').fadeOut(3000);
		$('#board').fadeIn(3000);
		$('#catagory').fadeIn(6000);
	});

});

Array.prototype.shuffle = function() {
   var input = this;
   
   for (var i = input.length-1; i >=0; i--) {
   
       var randomIndex = Math.floor(Math.random()*(i+1));
       var itemAtIndex = input[randomIndex];
       
       input[randomIndex] = input[i];
       input[i] = itemAtIndex;
   }
   return input;
}





