import Vue from 'vue'
import Router from 'vue-router'
import MyContent from '@/components/MyContent'
import MyTool from '@/components/MyTool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyContent',
      component: MyContent
    },
    {
      path: '/tool',
      name: 'MyTool',
      component: MyTool
    }
  ]
})
