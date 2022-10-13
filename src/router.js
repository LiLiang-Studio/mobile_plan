import { createRouter, createWebHashHistory } from 'vue-router'
import HomeLayout from './views/HomeLayout.vue'
import Home from './views/Home.vue'
import Tariff from './views/Tariff.vue'
import Terminal from './views/Terminal.vue'
import Mine from './views/Mine.vue'
import Details from './views/Details.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        { path: '', component: Home },
        { path: 'tariff', component: Tariff },
        { path: 'terminal', component: Terminal },
        { path: 'mine', component: Mine }
      ]
    },
    { path: '/details/:id', component: Details }
  ]
})

export default router
