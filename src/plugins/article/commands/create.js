import ITOS from '@/ITOS';

export default {
  exec() {
    // var currentRoute = ITOS.Router.router.currentRoute.path;

    // if (/^\/article$/.test(currentRoute)) {
    //   EventBus.$emit('content_save');
    // } else {
    //   ITOS.Terminal.print('You need to go back to the home page to use this feature');
    // }
    ITOS.Router.router.push('/article/create/create');
  }
}
