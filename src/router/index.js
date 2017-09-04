import Vue from 'vue'
import Router from 'vue-router'
import MyContent from '@/components/article/MyContent'
import MyTool from '@/components/MyTool'
import MyPage from '@/components/article/MyPage'
import MyAdmin from '@/components/admin/MyAdmin'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MyContent
    },
    {
      path: '/tool',
      component: MyTool
    },
    {
      path: '/page',
      component: MyPage
    },
    {
      path: '/admin',
      component: MyAdmin,
    }
  ]
})
