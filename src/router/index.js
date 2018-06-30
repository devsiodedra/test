import Vue from 'vue'
import Router from 'vue-router'
import AppContainer from '@/components/AppContainer'
import Contact from '@/components/Contact'
import About from '@/components/About'
import TestTemplate from '@/components/TestTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppContainer',
      component: AppContainer,
      children: [
        {
          path: '/about',
          alias: '',
          component: About,
          name: 'About',
          meta: {description: 'Overview of environment'}
        }, 
        {
          path: '/contact',
          alias: '',
          component: Contact,
          name: 'Contact',
          meta: {description: 'Overview of environment'}
        },
      ]
    },
    {
      path: '/test',
      name: 'TestTemplate',
      component: TestTemplate
    }
  ]
})
