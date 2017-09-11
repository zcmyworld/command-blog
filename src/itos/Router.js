
import { EventBus } from '@/event-bus.js';
import Router from 'vue-router'
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
      let item = {
        path: currentRoute.path,
        component: view(currentRoute.component)
      }
      if (currentRoute.redirect) {
        item.redirect = currentRoute.redirect
      }
      routeArr.push(item)
    }
    this.router.addRoutes(routeArr);
  }
}

function view(name) {
  return function (resolve) {
    require(['@/plugins/' + name + '.vue'], resolve);
  }
};

let itosRouter = new ITOSRouter();




export default itosRouter;