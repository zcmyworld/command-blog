import Vue from 'vue'
import Router from 'vue-router'

// import ITOS from '@/ITOS';

// import MyContent from '@/components/article/MyContent'
// import MyTool from '@/components/MyTool'
// import MyPage from '@/components/article/MyPage'
// import MyAdmin from '@/components/admin/MyAdmin'

Vue.use(Router)

function view(name) {
  return function(resolve) {
    require(['@/components/' + name + '.vue'], resolve);
  }
};

var router = new Router();

// router.addRoutes([{
//       path: '/article/:id/edit',
//       component: MyPage
//     }]);



export default router;

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: MyContent,
//     },
//     {
//       path: '/article/:id/edit',
//       component: MyPage
//     },
//     {
//       path: '/article/:id',
//       component: MyPage
//     },
//     {
//       path: '/tool',
//       component: MyTool
//     },
//     {
//       path: '/page',
//       component: MyPage
//     },
//     {
//       path: '/admin',
//       component: MyAdmin,
//     }
//   ]
// })


