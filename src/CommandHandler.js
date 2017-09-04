import router from '@/router'

let plugins = ['article'];

function getPluginByPath() {
  let route_path = router.currentRoute.path;
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
    try {
      model = require(`@/components/${pluginName}/commands/${key}`);
    } catch (e) {
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
    // import exit from '@/commands/exit';
    // console.log(command)
    // let exit = require('@/commands/exit')
    // console.log(exit.default)
    // if (exit.name == command) {
    //   exit.exec();
    // }
  }
};