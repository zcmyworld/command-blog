<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left-title">Itgo</div>
      <div v-if="isCommand" v-on:click="isCommand = !isCommand" class="drop-box" key="normal">
        <div class="icono-caretDown"></div>
      </div>
      <div v-else v-on:click="change" class="drop-box" key="editing">
        <div class="icono-hamburger"></div>
      </div>
    </div>
    <div class="header-right">
      <div class="github-icon">
        <img src="../assets/github.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      isCommand: false
    }
  }
}
</script>

<style scoped>
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