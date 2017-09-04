// 退出命令行工具
import ITOS from '@/ITOS';

export default {
  name: 'exit',
  exec(command) {
    ITOS.Terminal.exit();
  }
}
