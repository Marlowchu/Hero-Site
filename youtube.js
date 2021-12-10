
var vidId = []
var input = "marvel"
var vidPlayerEl = $('#player');
var i = 0

var inputEl = $('#input');
var searchEl = $('#btn');

var rapEl = $('#rapbtn');
var rnbEl = $('#rnbbtn');
var countryEl = $('#countrybtn');
var rockEl = $('#rockbtn');

var rapGenre = ["krump music", "dog", "cat"]
var rnbGenre = ["chris brown", "music video","drake music video"]
var countryGenre = ["music","country official music videos"]
var rockGenre = ["official elvis music  video", "candy rain"]



// button click
      searchEl.on('click', function () {
        
        // take the input and save it to be passed to api call
        input = document.getElementById("input").value;

        getApiVid ()
        
      });

// button click
    rapEl.on('click', function () {
        
        // randomly choose a index number from Genre array
         var index = Math.floor(Math.random() * rapGenre.length);

        // random index in array will be set to input var
        input = rapGenre[index];

        // call api
        getApiVid ()
  });

// button click
  rnbEl.on('click', function () {
        
    // randomly choose a index number from Genre array
     var index = Math.floor(Math.random() * rnbGenre.length);

    // random index in array will be set to input var
    input = rnbGenre[index];

    // call api
    getApiVid ()
});

// button click
countryEl.on('click', function () {
        
    // randomly choose a index number from Genre array
     var index = Math.floor(Math.random() * countryGenre.length);

    // random index in array will be set to input var
    input = countryGenre[index];

    // call api
    getApiVid ()
});

// button click
rockEl.on('click', function () {
        
    // randomly choose a index number from Genre array
     var index = Math.floor(Math.random() * rockGenre.length);

    // random index in array will be set to input var
    input = rockGenre[index];

    // call api
    getApiVid ()
});






function getApiVid () {
    // api url with key and parameters
    var requestUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuPrTUMPdfPTBq-3PnOOxfFCDoe_FeLDc&part=snippet&maxResults=1&q="+ input +"&type=video&videoDuration=medium&videoEmbeddable=true&videoLicense=creativeCommon";


    // call api
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        // grab the video Id from response and save it
        vidId = data.items[0].id.videoId

        console.log(vidId)

        if (i >= 1) {
            // clear video before loading new video
            var myobj = document.getElementById("vidPlayer");
            myobj.remove();

            }
 
        // create/display video player and add videoId to src url
        vidPlayerEl.append(`<iframe id= "vidPlayer" width="640" height="390"
        src="https://www.youtube.com/embed/`+vidId+`?autoplay=1&mute=1">
        </iframe>`);
        i++

      });
  }


