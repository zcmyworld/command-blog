// import exit from '@/commands/exit';

function getCommand(key) {
  try {
    let model = require(`@/commands/${key}`);
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