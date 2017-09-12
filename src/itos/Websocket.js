import Terminal from './Terminal';

// // 打开Socket 
// socket.onopen = function (event) {

//   // 发送一个初始化消息
//   socket.send('I am the client and I\'m listening!');

//   // 监听消息
//   socket.onmessage = function (event) {
//     console.log('Client received a message', event);
//   };

//   // 监听Socket的关闭
//   socket.onclose = function (event) {
//     console.log('Client notified socket has closed', event);
//   };

//   // 关闭Socket.... 
//   //socket.close() 
// };
class ITOSWebsocket {
  constructor() {
    this.ws = null;
  }

  connect() {
    this.ws = new WebSocket('ws://127.0.0.1:8083');
    this.ws.onopen = function () {
      Terminal.print('WebSocket connect success .. ');
    }
    this.ws.onmessage = function (msg) {
      Terminal.print(msg.data);
    }
  }

  send(msg) {
    this.ws.send(msg);
  }

  close() {
    this.ws.close();
    Terminal.print('WebSocket connection close .. ');
  }


}

export default new ITOSWebsocket();