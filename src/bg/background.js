// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

var settings = new Store("settings");


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('settings', settings.get('gsheet'))

  	if(request === 'saveMusic'){
    }
  }
);