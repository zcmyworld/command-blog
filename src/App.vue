<template>
  <div id="app">
    <my-header></my-header>
    <my-header-empty></my-header-empty>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyHeaderEmpty from './components/MyHeaderEmpty.vue';
  
export default {
  name: 'app',
  components: {
    MyHeaderEmpty,
    MyHeader
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