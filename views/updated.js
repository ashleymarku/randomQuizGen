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
var correct = 0
//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  var XHR = new XMLHttpRequest()

// iitializes API and grabs the info
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {

      //grabs the data from the server and reads it
          var data = JSON.parse(XHR.responseText);
        
            for(var i = 0; i < 10; i++){
       // grabs data from the api and puts it in its respective variable        
        catagory.innerHTML = 'Category: ' + data.results[i].category;
        type.innerHTML = 'Type: ' + data.results[i].type;
      difficulty.innerHTML = 'Difficulty: ' + data.results[i].difficulty;
      question.innerHTML = 'Question: ' + data.results[i].question

    a1.innerHTML = data.results[i].correct_answer;
    b2.innerHTML = data.results[i].incorrect_answers[2];
  c3.innerHTML = data.results[i].incorrect_answers[0]; 
    d4.innerHTML = data.results[i].incorrect_answers[1]
      }
        }
    }   
// allows us to interact with the api
  console.log('getting api...');
  XHR.open("GET", 'https://opentdb.com/api.php?amount=10');
  XHR.send();

});



$(document).ready(function(){
  //  on click, quiz appears or new question appears 
  $('#start-quiz').click(function(){
    $('#board').fadeIn(3000);

    //randomly changes the h1 text when next is clicked
    var words = ["1v1 me bro", "U mad bro?!", "Do U even lift?", "Do u kno da wae?", "What R U dumb or something?" ];
    var item = words[Math.floor(Math.random()*words.length)];
      //actually changes the text
      $('#title1').text(item);
      
    
  });

  // displays the alert and adds to the correct counter
  $('#a').click(function(){
      correct++;
      alert('correct!');
      console.log(correct)
      
    
  })

  //does the same as above but for wrong answers
  $('.btn2').click(function(){

      alert('WRONG!')

  })


});
