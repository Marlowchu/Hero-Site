
var i = 3

var imageEl = document.querySelector(".image")

var image 

var s = document.getElementById("sound");

var words = ["","READY?","YOU","ARE",]


let timersound = setInterval(playsound, 800);

let timer = setInterval(countDown, 1500);
    // s.play ()
    
   



function playsound() {
    s.play ()
}


function countDown() {

if (i !=0 ) {
    
    // s.play ()
    // var image = `<img src="./countdownassets/${i}.jpg" alt="" class=" image col p-4"></img>`
    var image = `<h1>${words[i]}</h1>`
    imageEl.innerHTML = image
    console.log (words [i])
    // console.log (test)
}
    if (i===0) {

        clearInterval(timer)
        clearInterval(timersound)
        // s.pause()
        console.log ("load next page")
        location.assign("question.html");
    }

    i--
    
}



 
    