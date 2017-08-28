<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
  
export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style>
</style>