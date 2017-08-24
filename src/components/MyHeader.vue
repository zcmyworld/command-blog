<template>
  <div class="header">
    <span class="header-left">Itgo</span>
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
  }

  .header-left {
    line-height: 60px;
    font-size: 20px;
    padding-left: 30px;
    color: #666;
  }
  
  .header-right {
    float: right;
    width: 100px;
    height: 60px;
    padding-right: 30px;
  }
  
  .github-icon {
    cursor: pointer;
    line-height: 60px;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    float: right;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
</style>