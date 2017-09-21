import ITOS from '@/ITOS';
import { EventBus } from '../event-bus.js';
import $ from 'jquery';

export default {
  exec(route_path) {
    //需要進入具體的文章也面才能使用這個功能
    var currentRoute = ITOS.Router.router.currentRoute.path;
    //判斷路由, /article/:id
    if (/^\/article\/[0-9]*$/.test(currentRoute)) {
      $.ajax({
        method: "get",
        url: `http://itos.dev.com/user/islogin`,
        async: false
      }).done((msg) => {
        if (msg.data.isLogin) {
          EventBus.$emit('content_edit');
        } else {
          ITOS.Terminal.print('Permission defined');
        }
      });
    } else {
      ITOS.Terminal.print('You need to open and article to use this function');
    }
  }
}
