import '../img/icon16.png'
import '../img/icon19.png'
import '../img/icon48.png'
import '../img/icon128.png'

import PouchDB from 'pouchdb';
import simplifyString from 'simplify-string';


var musicShelfDatabase = new PouchDB('musicshelf');

// PouchDB.debug.enable('*');



// var musics = [];
// chrome.storage.sync.get(['musics'], function(result) {
//   console.log('Value currently is ' + JSON.stringify(result, null, 2));
//   musics = result.musics;
// });
musicShelfDatabase.allDocs({include_docs: true}, function(info){
  console.log('allDocs', info);
});


chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log('settings', settings.get('gsheet'))

  	if(request.type === 'saveMusic'){
      saveMusic(request.payload);
      return sendResponse('ok')
    }

    if(request.type === 'getMusic'){
    }

    if(request.type === 'getAllMusic'){
      getAllMusics(function(infos){
        console.log('get all musics infos', infos)
        sendResponse(infos);
      })
    }

    // async response
    return true
  }
);

export function getMusic (music) {


}

export function saveMusic (music){
  // console.log('saveMusic');
  // if(!musics){
  //   musics = [];
  // }

  // musics.push(music)

  // chrome.storage.sync.set({musics: musics}, function() {
  //   console.log('Music saved ', music);
  // });
  if(!music.id){
    music.id = simplifyString(music.author) + '_' + simplifyString(music.title);
  }
  musicShelfDatabase.put(music);
}

function getAllMusics(callback){
  musicShelfDatabase.info().then(function (info) {
    console.log(info);
    // callback(info);
  })
  musicShelfDatabase.allDocs({include_docs: true}, function(info){
    console.log('callback info', info);
    // callback(info);
  }).then(function(infos){
    console.log('promise infos', infos);

    callback(infos.rows);
  });
}
