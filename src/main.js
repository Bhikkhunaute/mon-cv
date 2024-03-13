import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';

library.add(faVuejs);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
