import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Game from '../pages/game/Game'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },  {
      path: '/Game',
      name: 'Game',
      component: Game
    }
  ]
})
