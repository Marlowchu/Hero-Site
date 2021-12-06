
var info = []
var marvel = "spiderman"

var test = ["8SO43R9sxYk"]

function getApi () {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuPrTUMPdfPTBq-3PnOOxfFCDoe_FeLDc&part=snippet&maxResults=1&q="+ marvel +"theme music&type=video&videoDuration=medium&videoEmbeddable=true&videoLicense=creativeCommon&videoSyndicated=true";
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        info = data.items[0].id.videoId

        console.log(info)
        // .items[0].id.videoId

        // displayVid ();

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
  