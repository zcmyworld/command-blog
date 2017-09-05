
function getPluginByName(plugins, pname) {
  for (let i in plugins) {
    if (plugins[i].name == pname) {
      return plugins[i];
    }
  }
  return null;
}

export default class Plugin {
  constructor(plugins) {
    this.plugins = plugins;
  }
  //獲取所有插件
  all() {
    return this.plugins;
  }

  isCommand(pname, command) {
    let plugin = getPluginByName(this.plugins, pname);
    if (!plugin) {
      return false;
    }

    for (let i in plugin.commands) {
      if (plugin.commands[i] == command) {
        return true;
      }
    }
    return false
  }

  isPlugin(pname) {
    for (let i in this.plugins) {
      if (this.plugins[i].name == pname) {
        return true;
      }
    }
    return false;
  }

}
