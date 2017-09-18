<template>
  <div class="mypage">
    <h1 class="title">{{article.title}}</h1>
    <span class="post-time">Posted on {{article.posted}}</span>
    <div class="content">
      {{article.content}}
    </div>

  </div>
</template>

<script>
import hljs from 'highlight.js'
import ITOS from '@/ITOS';
import { EventBus } from './event-bus.js';

hljs.highlightCode =   function () { //自定义highlightCode方法，将只执行一次的逻辑去掉
  let blocks = document.querySelectorAll('pre  code');
  [].forEach.call(blocks, hljs.highlightBlock);
};
export default {
  name: 'MyPage',
  mounted() {
    hljs.highlightCode()
  },
  data() {
    return {
      article: {}
    }
  },
  created() {
    //  ITOS.Router.router.push('/article/1/edit');
    var articleId = this.$route.params.id;

    this.$http.get(`http://itos.dev.com/articles/${articleId}`).then((res) =>{
      this.article = res.body;
      return this;
    }).catch((err) => {
      ITOS.Terminal.print('System error .. ');
    });

    EventBus.$on('content_edit', () => {
      ITOS.Router.router.push(`/article/${articleId}/edit`);
      // this.$http.patch(`http://itos.dev.com/articles/5`, this.article).then((res) =>{
      //   ITOS.Terminal.print('save success .. ');
      //   return this;
      // }).catch((err) => {
      //   ITOS.Terminal.print('save error .. ');
      // });
    });
  }
}
</script>

<style scoped>
  .mypage {
    margin-top: 30px;
    width: 980px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 3px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px #aaaaaa;
    color: #666;
    font-weight: 300;
    line-height: 1.5;
  }
  
  .title {
    font-weight: 400;
  }
  
  h1 {
    font-size: 1.8em;
  }
  
  .content {
    border-top: 1px solid rgb(180, 180, 180);
    margin-top: 10px;
    padding-top: 30px;
    padding-left: 5px;
    padding-right: 5px;
  }
  
  span {
    font-size: 10px;
    margin-top: 10px;
  }
  
  p {
    margin-top: 5px;
  }
  
  pre {
    margin-top: 20px;
    border: 1px solid rgb(180, 180, 180);
    margin-bottom: 20px;
  }
</style>