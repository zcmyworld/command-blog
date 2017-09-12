<template>
  <div class="content">
    <div class="article">
      <router-link to="/article/1">
        <h1 class="title">Vue腳手架搭建</h1>
        <span>Posted on 2017.05.02</span>
        <p>构建一个Vue工程最快捷的方法是莫过于使用Vue官方提供的命令行工具刷新，对代码进行压缩打包，支持ES6语法等等，实现这些功能使用了大量的npm模块和webpack插件，这对想要了解整个工程架构的初学者而言并不友好。本系列文章将从最基础的功能开始构建，逐步完成一个完整的工程项目（最终大概会和vue-cli生成的项目长的一样）。</p>
      </router-link>
    </div>
    <div class="article">
      <router-link to="/article/1">
        <h1 class="title">Vue腳手架搭建</h1>
        <span>Posted on 2017.05.02</span>
        <p>构建一个Vue工程最快捷的方法是莫过于使用Vue官方提供的命令行工具刷新，对代码进行压缩打包，支持ES6语法等等，实现这些功能使用了大量的npm模块和webpack插件，这对想要了解整个工程架构的初学者而言并不友好。本系列文章将从最基础的功能开始构建，逐步完成一个完整的工程项目（最终大概会和vue-cli生成的项目长的一样）。</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import MyArticle from './MyArticle.vue';
export default {
  name: 'MyContent',
  components: {
    MyArticle
  },
  created: function() {
    this.$http.get('http://itos.dev.com/articles').then((res) =>{
      this.articles = res.body;
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .article {
    cursor: pointer;
    width: 600px;
    min-height: 200px;
    text-align: justify;
    border: 1px solid rgb(180, 180, 180);
    margin-top: 30px;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0px 2px 3px #aaaaaa;
    color: #666;
    font-weight: 300;
    line-height: 1.5;
  }
  
  h1 {
    font-size: 1.8em;
  }
  
  span {
    font-size: 10px;
    margin-top: 10px;
  }
  
  p {
    margin-top: 5px;
  }
  
  a {
    text-decoration: none;
    color: #666;
  }
</style>