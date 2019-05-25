<template>
  <div id="app">
    <img src="icon128.png">
    Video title : {{currentTitle}}
    Music : {{currentMusic}}
  </div>
</template>

<script>
import { extractMusicFromVideoTitle } from '../utils';

export default {
  name: 'App',

  data : function () {
    return {
      currentTitle : null,
      currentMusic : null,
    }
  },

  created : function () {
    this.getContentMusicTitle((musicTitle) => {
      const music = extractMusicFromVideoTitle(musicTitle);
      this.currentTitle = musicTitle;
      this.currentMusic = music;
    });
  },

  methods : {
    getContentMusicTitle : function (callback) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log('get active tab', tabs)
        chrome.tabs.sendMessage(tabs[0].id, 'extractVideoTitle', function(response) {
          console.log(response);
          if(response){
            callback(response);
            // displayMusic(response);
            // var music = extractMusicFromVideoTitle(response);
            // saveMusic(music);
          }
        });
      });
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px;
  height: 200px;
  width: 400px;
  font-family: Helvetica, Ubuntu, Arial, sans-serif;
}
</style>