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


function getCommand(key) {
  try {
    let pluginName = getPluginByPath();
    let model = null;
    //判斷是否使用plugin裏面的命令
    if (ITOS.Plugin.isPlugin(pluginName)) {
      if (ITOS.Plugin.isCommand(pluginName, key)) {
        model = require(`@/components/${pluginName}/commands/${key}`);
      } else {
        model = require(`@/commands/${key}`);
      }
    } else {
      model = require(`@/commands/${key}`);
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