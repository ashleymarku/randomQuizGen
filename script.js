var btn = document.querySelector("#start-quiz");

//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
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
	});




});

