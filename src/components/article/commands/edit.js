import ITOS from '@/ITOS';
import router from '@/router'

import MyPage from '@/components/article/MyPage'


export default {
  exec(route_path) {
    router.addRoutes([{
      path: '/article/:id/edit',
      component: MyPage
    }]);
    ITOS.Router.change('/article/1/edit');
  }
}
