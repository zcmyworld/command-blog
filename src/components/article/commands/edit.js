import ITOS from '@/ITOS';

import MyPage from '@/components/article/MyPage'


export default {
  exec(route_path) {
    // console.log(ITOS.Router)
    ITOS.Router.push('/article/1/edit');
  }
}
