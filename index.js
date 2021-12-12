
var inputEl = document.querySelector("#inputText")
var input
var test


function nextPage() {

    input = document.getElementById("inputText").value;

    test = input.length
    
    
    if (test != 0) {
        
   input = JSON.stringify (input);
   localStorage.setItem("name", input)

   location.assign("countdown.html");
}
}

