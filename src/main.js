import Vue from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue'
import Game from './pages/game/Game.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/game', component: Game },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
