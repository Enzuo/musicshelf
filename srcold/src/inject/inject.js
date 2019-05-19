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
		
		console.log(request);
								
    if (request === 'extractVideoTitle'){

			var videoTitle = extractVideoTitle();
			sendResponse(videoTitle);
		}
			

	});
	


function extractVideoTitle(){
	// 	title style-scope ytd-video-primary-info-renderer
	// var mainDiv = document.getElementsByClassName('ytd-video-primary-info-renderer') 
	var mainTitleDiv = document.querySelector('h1.ytd-video-primary-info-renderer');
	console.log('mainTitleDiv', mainTitleDiv);
	return mainTitleDiv.innerText;

}