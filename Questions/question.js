var QuestionandAnswerpile= [
    {
        question : 'What is your favoratie genre music?',
        choice : ['Rap','RnB ','Country','Rock'],
    },
    {
        question : ' How would you describe your current mood?',
        choice: ['Focused', 'Relaxed', 'Rowdy', 'Intense'],
    },
    {
         question : 'If you could choose one superpower what would it be?',
         choice : ['Flying', 'Hyperspeed','Invisibility', 'Super strength'], 
    },
    {
         question : 'What is your favorite subject?',
         choice : ['Math', 'Science', 'Art', 'History'],    
    },
    
    {
         question : 'Whats your favorite time of day? ',
         choice : ['Morning', 'Noon', 'Evening', 'Night'],
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
    choice0.style.backgroundColor =""
    choice1.style.backgroundColor =""
    choice2.style.backgroundColor =""
    choice3.style.backgroundColor =""
    
}


console.log(localStorage);
// localStorage.setItem('choice', JSON.stringify(choice));
// var choice = JSON.parse(localStorage.getItem('choice'));

function chooseAnswer(a){
    if(QuestionandAnswerpile[i].choice){ 
        
        choice0.style.backgroundColor ='green'
        nextDisplay.innerHTML="Next Question";
        console.log(QuestionandAnswerpile[i].choice[1])
        selections.push (QuestionandAnswerpile[i].choice[1]) 
        localStorage.setItem('Answer Selected', JSON.stringify(selections));
    }
    
    setTimeout(nextQuestion, 500);
}


function chooseAnswer1(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        choice1.style.backgroundColor ='green'
        nextDisplay.innerHTML="Next Question";
        console.log(QuestionandAnswerpile[i].choice[1])
        selections.push (QuestionandAnswerpile[i].choice[1]) 
        localStorage.setItem('Answer Selected', JSON.stringify(selections));
    }
    
    setTimeout(nextQuestion, 500);
}

function chooseAnswer2(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        choice2.style.backgroundColor ='green'
        nextDisplay.innerHTML="Next Question";
        console.log(QuestionandAnswerpile[i].choice[2])
        selections.push (QuestionandAnswerpile[i].choice[2]) 
        localStorage.setItem('Answer Selected', JSON.stringify(selections));
    }
    
    setTimeout(nextQuestion, 500);
}

function chooseAnswer3(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        choice3.style.backgroundColor ='green'
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

console.log (localStorage.getItem("Answer Selected"))

