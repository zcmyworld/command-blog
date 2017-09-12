import ITOS from '@/ITOS';
export default {
  exec() {
    ITOS.ws.connect();
    // ITOS.ws.send("install");
    setTimeout(() => {
      console.log(123)
      ITOS.ws.send('install')

    }, 3000)
  }
}
