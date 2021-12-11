
var i 


var imageEl = document.querySelector(".image")

var image 

var s = document.getElementById("sound");

var words = ["","READY?","YOU","ARE",]

let timer
let timersound



function play () {
    i = 3

    timer = setInterval(countDown, 1200);
    // s.play ()
    timersound = setInterval(playsound, 700);
   
}


function playsound() {
    s.play ()
}


function countDown() {

if (i !=0 ) {
    
    // var image = `<img src="./countdownassets/${i}.jpg" alt="" class=" image col p-4"></img>`
    var image = `<h1>${words[i]}</h1>`
    imageEl.innerHTML = image
    console.log (words [i])
}
    if (i===0) {

        clearInterval(timer)
        clearInterval(timersound)
        // s.pause()
        console.log ("load next page")
    }

    i--
    
}



 
    