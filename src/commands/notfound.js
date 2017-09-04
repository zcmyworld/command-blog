// 退出命令行工具
import ITOS from '@/ITOS';

export default {
  name: 'notfound',
  exec(command) {
    ITOS.Terminal.notfound(command);
  }
}
