import Vue from 'vue';
import App from './App.vue';
import Home from './pages/home/Home.vue';
import Game from './pages/game/Game.vue';
import Final from './pages/final/Final.vue'
import VueRouter from 'vue-router';
import { VueHammer } from 'vue2-hammer';

Vue.use(VueHammer);
Vue.use(VueRouter);
Vue.config.productionTip = false;
VueHammer.config.swipe = {
  threshold: 200
};

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/game', name: 'game', component: Game },
  { path: '/final', name: 'final', component: Final }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
