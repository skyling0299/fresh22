
import App from './App.vue'
import router from './router/index'
import './index.css'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.createApp(App).use(router).mount('#app')
App.use(VueAxios, axios)




