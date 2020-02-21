import {youtube_parser} from './utils';


chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    // ----------------------------------------------------------
    // This part of the script triggers when page is done loading
    console.log("Hello. This message was sent from scripts/inject.js");
    // ----------------------------------------------------------

  }
  }, 10);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");

    console.log(request, request === 'extractVideoId');

    if (request === 'extractVideoTitle'){
      var videoTitle = extractVideoTitle();
      sendResponse(videoTitle);
    }

    if (request === 'extractVideoId'){
      console.log('using parser', document.location.href)
      var id = youtube_parser(document.location.href);
      console.log('extractVideoId handler' + document.location, id, 'ok')
      sendResponse(id);
    }

    if (request === 'extractContent') {
      let videoId = youtube_parser(document.location.href);
      let videoTitle = extractVideoTitle();
      sendResponse({videoId, videoTitle});
    }


  });



function extractVideoTitle(){
  // 	title style-scope ytd-video-primary-info-renderer
  // var mainDiv = document.getElementsByClassName('ytd-video-primary-info-renderer')
  var mainTitleDiv = document.querySelector('h1.ytd-video-primary-info-renderer');
  console.log('mainTitleDiv', mainTitleDiv);
  return mainTitleDiv.innerText;

}

window.onhashchange = function() {
  //code
  console.log('url changed') ;
}

window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

window.addEventListener('locationchange', function(){
  console.log('location changed!');
})
