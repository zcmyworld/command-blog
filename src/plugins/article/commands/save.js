import ITOS from '@/ITOS';
import { EventBus } from '../event-bus.js';

export default {
  exec() {
    EventBus.$emit('content_save');
    // ITOS.Terminal.print('save success ..');
  }
}
