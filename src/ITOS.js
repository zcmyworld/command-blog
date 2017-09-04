import Terminal from '@/itos/Terminal';
import Router from '@/itos/Router';

import { EventBus } from '@/event-bus.js';
class ITOS {
  constructor() {
    this.Terminal = Terminal;
    this.Router = Router;
    this.event = EventBus;
  }
}
export default new ITOS();