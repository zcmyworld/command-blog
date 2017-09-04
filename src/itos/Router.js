
import { EventBus } from '@/event-bus.js';
import router from '@/router/index.js'
export default {
  change(route_path) {
    router.push(route_path);
  }
}