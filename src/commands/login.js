import ITOS from '@/ITOS';
import $ from 'jquery';

export default {
  name: 'login',
  exec(command) {
    // console.log(ITOS.Terminal.getCommandArgs());
    var args = ITOS.Terminal.getCommandArgs();
    if (args.length != 2) {
      // ITOS.Terminal.print('Command not implemented for that parameter');
      // return;
    }
    // var uname = args[0];
    // var pwd = args[1];
    $.ajax({
      method: "post",
      url: `http://itos.dev.com/user/login`,
      data: {
        uname: 'itgo',
        pwd: '1234qwer'
      },
      async: false
    }).done((msg, status, xhr) => {
      console.log(xhr)
      console.log(xhr.getAllResponseHeaders())
      var cookie = xhr.getResponseHeader('Set-Cookie');
      console.log(cookie)
      console.log(msg)
    });
  }
}
