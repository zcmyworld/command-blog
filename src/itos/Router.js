
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
    let routeArr = [];
    for (let i in routeConfig) {
      let currentRoute = routeConfig[i];
      routeArr.push({
        path: currentRoute.path,
        component: view(currentRoute.component)
      })
    }
    this.router.addRoutes(routeArr);
  }
}

function view(name) {
  return function (resolve) {
    require(['@/components/' + name + '.vue'], resolve);
  }
};

let itosRouter = new ITOSRouter();




export default itosRouter;