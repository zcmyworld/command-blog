
import { EventBus } from '@/event-bus.js';
import Router from 'vue-router'
import MyPage from '@/components/article/MyPage'
import MyContent from '@/components/article/MyContent'
import Vue from 'vue'



class ITOSRouter extends Router {
}

Vue.use(ITOSRouter);


let router = new ITOSRouter();


router.addRoutes([
  {
    path: '/',
    component: MyContent,
  },
  {
    path: '/article/:id/edit',
    component: MyPage
  },
  {
    path: '/article/:id',
    component: MyPage
  },
  {
    path: '/page',
    component: MyPage
  },

]);

export default router;