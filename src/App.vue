<template>
  <div id="app">
    <my-header></my-header>
    <my-header-empty></my-header-empty>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyHeaderEmpty from './components/MyHeaderEmpty.vue';
import MyFooter from './components/MyFooter.vue';
import { EventBus } from './event-bus.js';
  
export default {
  name: 'app',
  components: {
    MyHeaderEmpty,
    MyHeader,
    MyFooter
  },
  created: function () {
    window.addEventListener('keyup', this.keyboardHandler)
  },
  methods: {
    keyboardHandler: function (ev) {
      //打开控制台
      if (ev.code == 'Backquote') {
        EventBus.$emit('ev_commandBoxChange')
      }
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    /*transition: opacity .5s*/
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>