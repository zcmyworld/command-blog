import Vue from 'vue'
import Router from 'vue-router'
import MyContent from '@/components/MyContent'
import MyTool from '@/components/MyTool'
import MyPage from '@/components/MyPage'
import MyAdmin from '@/components/admin/MyAdmin'

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
    },
    {
      path: '/page',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/admin',
      name: 'MyAdmin',
      component: MyAdmin
    }
  ]
})
