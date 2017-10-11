import { EventBus } from '@/event-bus.js';

export default {
  saveSessionKey(key) {
    localStorage.setItem('sessionkey', key);
  },
  getSessionKey(sessionkey) {
    return localStorage.getItem('sessionkey');
  }
}