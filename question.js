var QuestionandAnswerpile= [
    {
         question : 'Which ability would you choose?',
         choice : ['Flying', 'Hyperspeed','Invisibility', 'Super strength'], 
    },
    {
         question : 'What is your favorite subject?',
         choice : ['Math', 'Science', 'Art', 'History'],    
    },
    {
         question : ' How would you describe your current mood?',
         choice: ['Focused', 'Relaxed', 'Rowdy', 'Intense'],
    },
    {
         question : 'Whats your favorite time of day? ',
         choice : ['Morning', 'Noon', 'Evening', 'Night'],
    },
    {
         question : 'A very useful tool used during development and debugging for printing content to the debugger is:',
         choice : ['JavaScript','terminal / bash', 'for loops','console.log'],
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


console.log(localStorage);
// localStorage.setItem('choice', JSON.stringify(choice));
// var choice = JSON.parse(localStorage.getItem('choice'));


function chooseAnswer0(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        nextDisplay.innerHTML="Next Question";
        console.log(a);
        
        localStorage.setItem('choice A', JSON.stringify(`${QuestionandAnswerpile[i].choice[0]}`));
        console.log(localStorage);
    }
    
    setTimeout(nextQuestion, 500);
}

function chooseAnswer1(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        nextDisplay.innerHTML="Next Question";
        console.log(a);
        localStorage.setItem('choice B', JSON.stringify(`${QuestionandAnswerpile[i].choice[1]}`));
    }
    
    setTimeout(nextQuestion, 500);
}

function chooseAnswer2(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        nextDisplay.innerHTML="Next Question";
        console.log(a);
        localStorage.setItem('choice C', JSON.stringify(`${QuestionandAnswerpile[i].choice[2]}`));
    }
    
    setTimeout(nextQuestion, 500);
}

function chooseAnswer3(a){
    if(QuestionandAnswerpile[i].choice){ 
    
        nextDisplay.innerHTML="Next Question";
        console.log(a);
        localStorage.setItem('choice D', JSON.stringify(`${QuestionandAnswerpile[i].choice[3]}`));
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

console.log (localStorage.getItem("Answer Selected"))

