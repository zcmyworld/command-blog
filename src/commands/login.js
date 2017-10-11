import ITOS from '@/ITOS';
import $ from 'jquery';

export default {
  name: 'login',
  exec(command) {
    // console.log(ITOS.Terminal.getCommandArgs());
    var args = ITOS.Terminal.getCommandArgs();
    if (args.length != 2) {
      ITOS.Terminal.print('Command not implemented for that parameter');
      return;
    }
    var uname = args[0];
    var pwd = args[1];
    $.ajax({
      method: "post",
      headers: {
        'sessionkey': ITOS.Session.getSessionKey()
      },
      url: `http://itos.dev.com/user/login`,
      data: {
        uname: uname,
        pwd: pwd
      },
      async: false
    }).done((resData, status, xhr) => {
      if (resData.error != 0) {
        ITOS.Terminal.print(resData.msg)
        return;
      }
      ITOS.Session.saveSessionKey(resData.data.sessionkey);
      //登录成功
      ITOS.Terminal.print(resData.msg);
    });
  }
}
