var QuestionandAnswerpile= [
    {
         question : 'Commonly used data types DO NOT include?',
         choice : ['Strings', 'Booleans','Alerts', 'Numbers'],
         answer : 'Alerts'
    },
    {
         question : ' The condition in an if / else statement is enclosed within ____.',
         choice : ['Quotes', 'Curly brackets', 'Parentheses', 'Square brackets'],
         answer : 'Parentheses'
    },
    {
         question : ' Arrays in JavaScript can be used to store ____.',
         choice: ['numbers and strings', 'other arrays', 'booleans', 'All of the above'],
         answer : 'All of the above'
    },
    {
         question : 'String values must be enclosed within ____ when being assigned to variables. ',
         choice : ['commas', 'curly brackets', 'quotes', 'parentheses'],
         answer : 'quotes'
    },
    {
         question : 'A very useful tool used during development and debugging for printing content to the debugger is:',
         choice : ['JavaScript','terminal / bash', 'for loops','console.log'],
         answer : 'console.log'
    }
]

var question= document.getElementById('question');
var choice0= document.getElementById('choice0');
var choice1= document.getElementById('choice1');
var choice2= document.getElementById('choice2');
var choice3= document.getElementById('choice3');
var span= document.querySelector('span');

var selections = []

var i =0

function showQuestion(){
    for(var y=0; y<span.length; y++){
     
    }
    question.innerHTML= 'Question '+' # '+(i+1)+ ': ' +QuestionandAnswerpile [i].question;
    choice0.innerHTML= QuestionandAnswerpile[i].choice[0];
    choice1.innerHTML= QuestionandAnswerpile[i].choice[1];
    choice2.innerHTML= QuestionandAnswerpile[i].choice[2];
    choice3.innerHTML= QuestionandAnswerpile[i].choice[3];
    whatQueNum.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+QuestionandAnswerpile.length;
    nextDisplay.innerHTML = ""
}



// localStorage.setItem('choice', JSON.stringify(choice));
// var choice = JSON.parse(localStorage.getItem('choice'));


function chooseAnswer(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        nextDisplay.innerHTML="Next Question";
        console.log(QuestionandAnswerpile[i].choice[0])
        selections.push (QuestionandAnswerpile[i].choice[0]) 
        localStorage.setItem('Answer Selected', JSON.stringify(selections));
    }
    
    setTimeout(nextQuestion, 500);
}

function chooseAnswer1(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        nextDisplay.innerHTML="Next Question";
        console.log(QuestionandAnswerpile[i].choice[1])
        selections.push (QuestionandAnswerpile[i].choice[1]) 
        localStorage.setItem('Answer Selected', JSON.stringify(selections));
    }
    
    setTimeout(nextQuestion, 500);
}

function chooseAnswer2(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        nextDisplay.innerHTML="Next Question";
        console.log(QuestionandAnswerpile[i].choice[2])
        selections.push (QuestionandAnswerpile[i].choice[2]) 
        localStorage.setItem('Answer Selected', JSON.stringify(selections));
    }
    
    setTimeout(nextQuestion, 500);
}

function chooseAnswer3(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        nextDisplay.innerHTML="Next Question";
        console.log(QuestionandAnswerpile[i].choice[3])
        selections.push (QuestionandAnswerpile[i].choice[3]) 
        localStorage.setItem('Answer Selected', JSON.stringify(selections));
    }
    
    setTimeout(nextQuestion, 500);
}


function nextQuestion () {
    if (i<QuestionandAnswerpile.length-1)
    {    
        i=i+1;
        showQuestion();
    }
    else{
        QuestionandAnswerpile.length;
    }
}
showQuestion()



