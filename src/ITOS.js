import Terminal from '@/itos/Terminal';
import Router from '@/itos/Router';
import Plugin from '@/itos/Plugin';
import { EventBus } from '@/event-bus.js';

class ITOS {
  constructor() {
    this.Terminal = Terminal;
    this.Router = Router;
    this.event = EventBus;
    this.Plugin = Plugin
  }
}
export default new ITOS();