import Terminal from '@/itos/Terminal';
import ITOSRouter from '@/itos/Router';
import Plugin from '@/itos/Plugin';
import ws from '@/itos/Websocket';
import { EventBus } from '@/event-bus.js';
import $ from 'jquery';

import Vue from 'vue'

import VueResource from 'vue-resource';

import App from './App'

Vue.use(VueResource);

const router = ITOSRouter.router;

class ITOS {
  constructor() {
    this.Terminal = Terminal;
    this.Router = ITOSRouter;
    this.event = EventBus;
    this.Plugin = null;
    this.ws = ws;
  }

  init() {
    $.ajax({
      method: "get",
      url: "http://itos.dev.com/itos/config",
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