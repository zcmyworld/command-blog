
import { EventBus } from '@/event-bus.js';
import Router from 'vue-router'
import MyPage from '@/components/article/MyPage'
import MyContent from '@/components/article/MyContent'
import Vue from 'vue'

Vue.use(Router);

const router = new Router();

class ITOSRouter {
  constructor() {
    this.router = router;
  }

  setRoutes(routeConfig) {
    // this.routeConfig

    this.router.addRoutes([
      {
        path: '/',
        component: view('article/MyContent'),
      },
      {
        path: '/article/:id/edit',
        component: MyPage
      },
      {
        path: '/article/:id',
        component: MyPage
      },
      {
        path: '/page',
        component: MyPage
      },
    ]);
  }
}

function view(name) {
  return function (resolve) {
    require(['@/components/' + name + '.vue'], resolve);
  }
};

let itosRouter = new ITOSRouter();




export default itosRouter;