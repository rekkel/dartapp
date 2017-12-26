import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import Home from './components/Home.vue'
import vijf2 from './components/vijf2.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/vijf2', component: vijf2 }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
