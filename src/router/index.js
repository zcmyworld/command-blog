import Vue from 'vue'
import Router from 'vue-router'
import MyContent from '@/components/MyContent'
import MyTool from '@/components/MyTool'
import MyPage from '@/components/MyPage'
import MyAdmin from '@/components/admin/MyAdmin'
import MyAdminArticleList from '@/components/admin/MyAdminArticleList'
import MyAdminEditArticle from '@/components/admin/MyAdminEditArticle'



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
      children: [{
        path: 'articlelist',
        component: MyAdminArticleList
      }, {
        path: 'editarticle',
        component: MyAdminEditArticle
      }]
    }
  ]
})
