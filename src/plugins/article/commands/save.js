import ITOS from '@/ITOS';
import { EventBus } from '../event-bus.js';

export default {
  exec() {
    //需要進入具體的文章也面才能使用這個功能
    var currentRoute = ITOS.Router.router.currentRoute.path;
    //判斷路由, /article/:id
    if (/^\/article\/[0-9]*\/edit$/.test(currentRoute)) {
      EventBus.$emit('content_save');
    } else {
      ITOS.Terminal.print('You need to open and article to use this function');
    }
  }
}
