chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log('get active tab', tabs)
  chrome.tabs.sendMessage(tabs[0].id, 'extractVideoTitle', function(response) {
    console.log(response);
    if(response){
      displayCurrentMusic(response)
    }
  });
});

function displayCurrentMusic(musicName){
  var input = document.getElementById('currentMusic');
  input.value = musicName;
}