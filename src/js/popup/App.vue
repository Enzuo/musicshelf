<template>
  <div id="app">
    <img src="icon128.png">
    Video title : {{ currentTitle }}
    Music : {{ currentMusic }}
    <md-button
      class="md-icon-button"
      :class="isFavorite ? 'md-primary' : null"
      @click="favorite"
    >
      <md-icon>star</md-icon>
    </md-button>
    <md-button
      class="md-icon-button"
      :class="isKtv ? 'md-primary' : null"
      @click="singable"
    >
      <md-icon>mic</md-icon>
    </md-button>
    <md-button
      class="md-icon-button"
      @click="remove"
    >
      <md-icon>undo</md-icon>
    </md-button>
    <div>
      All musics {{ musics }}
      <ul>
        <li
          v-for="(music, index) in musics"
          :key="index"
        >
          {{ music }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { extractMusicFromVideoTitle } from '../utils';


export default {
  name: 'App',
  // components: {'md-button' : MdButton},
  data : function () {
    return {
      currentTitle : null,
      currentMusic : null,
      musics : null,
      isFavorite : false,
      isKtv : false,
    }
  },

  created : function () {
    this.getContentMusicTitle((musicTitle) => {
      const music = extractMusicFromVideoTitle(musicTitle);
      this.currentTitle = musicTitle;
      this.currentMusic = music;
      this.saveMusic(music);
    });
    this.getAllMusic((musics) => {
      this.musics = musics;
    })
  },

  methods : {
    getContentMusicTitle : function (callback) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log('get active tab', tabs)
        chrome.tabs.sendMessage(tabs[0].id, 'extractVideoTitle', function(response) {
          console.log(response);
          if(response){
            callback(response);
          }
        });
      });
    },
    saveMusic: function (music){
      if(music){
        chrome.runtime.sendMessage(undefined, {
          type: 'saveMusic',
          payload: music,
        }, function(response){
          console.log('popup got response to saveMusic', response)
        })
      }
    },
    getAllMusic: function(callback){
      chrome.runtime.sendMessage(undefined, {
        type: 'getAllMusic',
      }, function(response){
        console.log('got all music', response)
        return callback(response)
      })
    },
    favorite: function(){
      this.isFavorite = !this.isFavorite;
    },
    singable: function(){
      this.isKtv = !this.isKtv;
    },
    remove: function(){

    }
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
