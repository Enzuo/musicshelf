// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

var settings = new Store("settings");


var musics = [];
chrome.storage.sync.get(['musics'], function(result) {
  console.log('Value currently is ' + JSON.stringify(result, null, 2));
  musics = result.musics;
});


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('settings', settings.get('gsheet'))

  	if(request.type === 'saveMusic'){
      saveMusic(request.payload);
    }

    if(request.type === 'getMusic'){
    }

    if(request.type === 'getAllMusic'){
      sendResponse(getAllMusic());
    }
  }
);

function saveMusic(music){
  console.log('saveMusic');
  if(!musics){
    musics = [];
  }

  musics.push(music)

  chrome.storage.sync.set({musics: musics}, function() {
    console.log('Music saved ', music);
  });
}

function getAllMusics(){
  return musics;
}