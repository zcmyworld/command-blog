import Terminal from '@/itos/Terminal';
import ITOSRouter from '@/itos/Router';
import Plugin from '@/itos/Plugin';
import { EventBus } from '@/event-bus.js';
import $ from 'jquery';

import Vue from 'vue'

import App from './App'

const router = ITOSRouter.router;

class ITOS {
  constructor() {
    this.Terminal = Terminal;
    this.Router = ITOSRouter;
    this.event = EventBus;
    this.Plugin = null;
  }

  init() {
    $.ajax({
      method: "get",
      url: "http://192.168.2.8:3001",
      async: false
    }).done((msg) => {
      this.Plugin = new Plugin(msg.plugins);
      // this.Plugin = new Plugin(msg.plugins);
      this.Router.setRoutes(msg.routes);
    });

    Vue.config.productionTip = false

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })

  }
}
export default new ITOS();

// router.addRoutes([{
//       path: '/article/:id/edit',
//       component: MyPage
//     }]);