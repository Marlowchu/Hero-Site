
var vidId = []
var input = "marvel comic theme song"
var vidPlayerEl = $('#player');
var i = 0

var inputEl = $('#input');
var searchEl = $('#btn');

// button click
      searchEl.on('click', function () {
        // take the input and save it to be passed to api call
        input = document.getElementById("input").value;
        getApiVid ()

      });


function getApiVid () {
    // api url with key and parameters
    var requestUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuPrTUMPdfPTBq-3PnOOxfFCDoe_FeLDc&part=snippet&maxResults=1&q="+ input +"&type=video&videoDuration=medium&videoEmbeddable=true&videoLicense=creativeCommon&videoSyndicated=true";


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


