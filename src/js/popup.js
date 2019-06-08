import Vue from 'vue';
import { MdButton, MdIcon } from 'vue-material/dist/components';
// import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default.css';
import "../css/popup.css";
import App from './popup/App.vue';

Vue.use(MdButton);
Vue.use(MdIcon);


new Vue({
  el: '#app',
  render: h => h(App)
});
