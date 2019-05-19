chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log('get active tab', tabs)
  chrome.tabs.sendMessage(tabs[0].id, 'extractVideoTitle', function(response) {
    console.log(response);
    if(response){
      displayMusic(response);
      var music = extractMusicFromVideoTitle(response);
      saveMusic(music);
    }
  });
});

function extractMusicFromVideoTitle(vTitle){
  if(!vTitle){
    return null
  }

  // Perfect Run
  // Crooked Colours - Perfect run
  // Crooked Colours - Perfect run (official video)
  // Perfect run (official video)
  // Kendrick Lamar, SZA - All The Stars
  var vTitleArr = vTitle.split(/-|\(/);

  if(!vTitleArr){
    return null
  }

  var title = '';
  if(vTitleArr.length === 1){
    title = vTitleArr[0]
  }
  var title = vTitleArr[1];
  var author = vTitleArr[0];

  return {author : author, title : title, feats : '', favorite : false, ktv : false}
}

function displayMusic(musicName){
  var input = document.getElementById('currentMusic');
  input.value = musicName;
}

function saveMusic(music){
  if(music){
    var bg = chrome.extension.getBackgroundPage();
    bg.saveMusic(music)
  }
}
