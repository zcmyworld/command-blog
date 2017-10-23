import ITOS from '@/ITOS';

import $ from 'jquery';
import Config from '@/itos/Config';

export default {
  name: 'bye',
  exec(command) {
    $.ajax({
      method: "get",
      headers: {
        'sessionkey': ITOS.Session.getSessionKey()
      },
      url: `http://${Config.host}:${Config.port}/user/logout`,
      async: false
    }).done((resData, status, xhr) => {
      if (resData.error != 0) {
        ITOS.Terminal.print(resData.msg)
        return;
      }
      ITOS.Session.saveSessionKey(resData.data.sessionkey);
      ITOS.Terminal.print(resData.msg);
    });
  }
}
