import ITOS from '@/ITOS';

import MyPage from '@/components/article/MyPage'


export default {
  exec(route_path) {
    ITOS.Router.router.push('/article');
  }
}
