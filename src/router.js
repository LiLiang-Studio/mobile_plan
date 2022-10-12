import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/HomeLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/Home.vue')
        },
        {
          path: 'tariff',
          component: () => import('./views/Tariff.vue')
        },
        {
          path: 'terminal',
          component: () => import('./views/Terminal.vue')
        },
        {
          path: 'mine',
          component: () => import('./views/Mine.vue')
        }
      ]
    },
    {
      path: '/details/:id',
      component: () => import('./views/Details.vue')
    }
  ]
})

export default router
