// import router from '@/router'
import ITOS from '@/ITOS';

let plugins = ['article'];

function getPluginByPath() {
  // let route_path = router.currentRoute.path;
  let route_path = ITOS.Router.router.currentRoute.path;
  return route_path.split('/')[1];
}

function in_array(item, arr) {
  for (let i in arr) {
    if (item == arr[i]) {
      return true;
    }
  }
  return false;
}


/**
 * 檢查輸入命令格式
 */
function checkCommand() {

}

/**
 * 解析命令
 */
function parseCommand(key) {
  var rs = key.split(' ');
  var key = rs[0];
  var args = rs.slice(1, rs.length);
  return {
    key: key,
    args: args
  }
}

function getCommand(key) {
  try {
    let pluginName = getPluginByPath();
    let model = null;
    let commandKey = parseCommand(key);
    
    ITOS.Terminal.setCommand(commandKey.key);
    ITOS.Terminal.setCommandArgs(commandKey.args);
    
    //判斷是否使用plugin裏面的命令
    if (ITOS.Plugin.isPlugin(pluginName)) {
      if (ITOS.Plugin.isCommand(pluginName, commandKey.key)) {
        model = require(`@/plugins/article/view/${pluginName}/view/commands/${commandKey.key}`);
      } else {
        model = require(`@/commands/${commandKey.key}`);
      }
    } else {
      model = require(`@/commands/${commandKey.key}`);
    }

    return model.default;
  } catch (e) {
    let model = require(`@/commands/notfound`);
    return model.default;
  }
}

export default {
  handle(command) {
    let model = getCommand(command);
    model.exec(command);
  }
};