import Terminal from '@/itos/Terminal';
import router from '@/itos/Router';
import Plugin from '@/itos/Plugin';
import { EventBus } from '@/event-bus.js';
import $ from 'jquery';

import Vue from 'vue'

import App from './App'


class ITOS {
  constructor() {
    this.Terminal = Terminal;
    this.Router = router;
    this.event = EventBus;
    this.Plugin = null;
  }

  init() {
    $.ajax({
      method: "get",
      url: "http://127.0.0.1:3001",
      async: false
    }).done((msg) => {
      this.Plugin = new Plugin(msg.plugins);
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