
var vidId = []
var input = "marvel comic theme song"
var vidPlayerEl = $('#player');




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
        // create/display video player and add videoId to src url
        vidPlayerEl.append(`<iframe id= "vidPlayer" width="640" height="390"
        src="https://www.youtube.com/embed/`+vidId+`?autoplay=1&mute=1">
        </iframe>`);

      });
  }



// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuPrTUMPdfPTBq-3PnOOxfFCDoe_FeLDc&part=snippet&maxResults=1&q=marvel's hulk music&type=video&videoDuration=medium&videoEmbeddable=true&videoLicense=creativeCommon&videoSyndicated=true", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result.items[0].id.videoId))
//     .catch(error => console.log('error', error));



function displayVid () {
    

  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: test[0],
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 10000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
}