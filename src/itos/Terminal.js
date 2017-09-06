
import { EventBus } from '@/event-bus.js';
export default {
  exit() {
    EventBus.$emit('terminal_close')
  },
  notfound(message) {
    EventBus.$emit('terminal_notfound', message)
  },
  clear() {
    EventBus.$emit('terminal_clear')
  },
  print(message) {
    EventBus.$emit('terminal_print', message)
  }
}