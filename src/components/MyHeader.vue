<template>
  <div class="header-box">
    <div class="header">
      <div class="header-left">
        <div class="header-left-title">Itgo</div>
        <div v-if="isCommand" v-on:click="showCommandBox" class="drop-box" key="normal">
          <div class="icono-caretDown"></div>
        </div>
        <div v-else v-on:click="showCommandBox" class="drop-box" key="editing">
          <div class="icono-hamburger"></div>
        </div>
      </div>
      <div class="header-right">
        <div class="github-icon">
          <img src="../assets/github.png">
        </div>
      </div>
    </div>
    <div class="command-box" v-on:click="clickCommandBox">
      <transition v-on:enter="enter">
        <div v-if="isCommand" class="command-box-talker" id="commandBoxTalker">
          <template v-for="item in oldCommands">
            <div class="command-item">
              {{ item.message }}</div>
          </template>
          <div class="input-box">
            <input spellcheck="false" id="inputCommand" class="command-box-line" v-on:keyup.enter="getCommand" v-on:keydown="inputKeydown"
              ref="commandblock" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate';
import router from './../router/index.js'
import { EventBus } from '../event-bus.js';
import CommandHandler from '../CommandHandler.js';

export default {
  name: 'MyHeader',
  data () {
    return {
      isCommand: false,
      msg: 'helloworld',
      oldCommands: [{
        message: "I'm Itgo, nice to meet you ."
      }]
    }
  },
  created() {
    EventBus.$on('ev_commandBoxChange', () => {
      this.isCommand = !this.isCommand;
      return this;
    })
    EventBus.$on('terminal_close', () => {
      this.oldCommands = [];
      this.isCommand = false;
      return this;
    })
    EventBus.$on('terminal_show', (message) => {
      this.oldCommands.push({
        message: message
      })
      return this;
    })
    EventBus.$on('terminal_notfound', (message) => {
      this.oldCommands.push({
        message: message + ': command not found'
      })
      return this;
    })
    EventBus.$on('terminal_clear', (message) => {
      this.oldCommands = [];
      return this;
    })
  },
  methods: {
    inputKeydown: function(ev) {
      if (ev.code == 'Backquote') {
        ev.preventDefault();
      }
    },
    clickCommandBox: function() {
      let container = this.$el.querySelector("#inputCommand");
      container && container.focus(container);
    },
    showCommandBox: function() {
      this.isCommand = !this.isCommand;
      return this;
    },
    enter: function (el, done) {
      let container = this.$el.querySelector("#inputCommand");
      container && container.focus(container);
      Velocity(el, { top:0 }, { duration: 300 })
    },
    getCommand: function(ev) {
      var commandblock = this.$refs.commandblock.value;
      this.$refs.commandblock.value = '';

      CommandHandler.handle(commandblock);

      if (commandblock != 'clear' && commandblock != 'exit') {
        this.oldCommands.push({
          message: "> " + commandblock
        })
      }
      // if (commandblock == 'home') {
      //   router.push('/');
      //   this.oldCommands.push({
      //     message: 'Jumping to home'
      //   })
      // }
      // else if (commandblock == 'tool') {
      //   router.push('tool');
      //   this.oldCommands.push({
      //    message: 'Jumping to tool'
      //   })
      // }

      //渲染完畢觸發
      this.$nextTick(function(){
        var container = this.$el.querySelector("#commandBoxTalker");
        container.scrollTop = container.scrollHeight;
      })
      return this;
    }
  }
}
</script>

<style scoped>
  .command-item {
    margin-left: 10px;
    margin-top: 3px;
    color: rgb(100, 100, 100);
    /*font-size: 20px;*/
    height: 25px;
  }
  
  .input-box {
    height: 25px;
    margin-left: 10px;
    margin-top: 3px;
  }
  
  .command-box-line {
    font: inherit;
    /*font-size: 20px;*/
    background-color: black;
    border: none;
    color: rgb(100, 100, 100);
    outline: none;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  .command-box {
    width: 100%;
    position: fixed;
    padding: 0 50px;
    top: 60px;
    box-sizing: border-box;
  }
  
  .command-box-talker {
    background-color: black;
    opacity: 0.8;
    height: 400px;
    font-size: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    opacity: 0.8;
  }
  
  .header {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0px 2px 3px #aaaaaa;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 50px;
  }
  
  .header-left {
    line-height: 60px;
    font-size: 20px;
    width: 300px;
    color: #666;
    box-sizing: border-box;
    display: flex;
  }
  
  .header-right {
    height: 60px;
  }
  
  .header-left-title {
    text-align: center;
  }
  
  .drop-box {
    height: 60px;
    margin-left: 30px;
    cursor: pointer;
  }
  
  .icono-hamburger {
    color: #666;
  }
  
  .icono-caretDown {
    color: #666;
  }
  
  .github-icon {
    cursor: pointer;
    line-height: 60px;
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
</style>