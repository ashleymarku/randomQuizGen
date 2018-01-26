
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
var next = document.querySelector('#next')
//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  var XHR = new XMLHttpRequest();
 
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
          var data = JSON.parse(XHR.responseText);
	 	for(var i = 0; i < 10; i++){
	 catagory.innerHTML = 'Category: ' + data.results[i].category;
	 type.innerHTML = 'Type: ' + data.results[i].type;
	 difficulty.innerHTML = 'Difficulty: ' + data.results[i].difficulty;
	 question.innerHTML = 'Question: ' + data.results[i].question
	 console.log(data.results[i].correct_answer);
     console.log(data.results[i].incorrect_answers[2]);
     console.log(data.results[i].incorrect_answers[0]);
     console.log(data.results[i].incorrect_answers[1]);
		
    a1.innerHTML = data.results[i].correct_answer;
    b2.innerHTML = data.results[i].incorrect_answers[2];
	c3.innerHTML = data.results[i].incorrect_answers[0]; 
    d4.innerHTML = data.results[i].incorrect_answers[1];
    	
    	}
    		

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
		

	});

	$('.btn1').click(function(){
	
			alert('correct!');
			$('#next').fadeIn(2000);
			$('.btn2').hide('fast');
		
	})

	$('.btn2').click(function(){
		flag = true;
		if((b2.innerHTML || c3.innerHTML || d4.innerHTML)){
			alert('WRONG!')
			$('.btn2').hide('fast');
		}

	$('#next').click(function(){
	 
	})	

	})

	

	

});