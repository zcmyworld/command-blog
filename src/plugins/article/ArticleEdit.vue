<template>
  <div class="admin-edit-article">
    <div class="edit-title-box">
      <input class="edit-title" v-model="article.title">
    </div>
    <div class="created-box">
      <span>Posted on {{article.posted}}</span>
    </div>
    <summary-editor :summary="article.summary"></summary-editor>
    <hr>
    <my-editor :content="article.content"></my-editor>

  </div>
</template>

<script>
import MyEditor from './MyEditor';
import SummaryEditor from './SummaryEditor';
import { EventBus } from './event-bus.js';
import ITOS from '@/ITOS';
export default {
  name: 'MyAdminEditArticle',
  components: {
    MyEditor,
    SummaryEditor
  },
  data() {
    return {
      article: {}
    }
  },
  created: function() {
    var articleId = this.$route.params.id;
    this.$http.get(`http://itos.dev.com/articles/${articleId}`).then((res) =>{
      this.article = res.body.article;
      return this;
    }).catch((err) => {
      ITOS.Terminal.print('System error .. ');
    });
    EventBus.$on('summary_change', (newsummary) => {
      this.article.summary = newsummary;
      return this;
    });
    EventBus.$on('content_change', (newcontent) => {
      this.article.content = newcontent;
      return this;
    });
    EventBus.$on('content_save', () => {
      var articleId = this.$route.params.id;
      this.$http.patch(`http://itos.dev.com/articles/${articleId}`, this.article, {
        headers: {
          'sessionkey': ITOS.Session.getSessionKey()
        }
      }).then((resData) =>{
        ITOS.Terminal.print(resData.body.msg);
        if (resData.body.code == 0) {
          ITOS.Router.router.push(`/article/${articleId}`);
          return;
        }
        return this;
      }).catch((err) => {
        console.log(err)
        ITOS.Terminal.print('save error .. ');
      });
    });
  },
  destroyed() {
    EventBus.$off(['content_save', 'summary_change', 'content_change'])
  },
  watch: {
    'article': {
      handler: function (val, oldVal) { 
        this.article = val;
      },
      deep: true 
    }
  }
}
</script>

<style scoped>
  .edit-title-box {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
  }
  
  .edit-title {
    width: 100%;
    height: 100%;
    font-size: 20px;
    box-sizing: border-box;
    padding: 5px;
  }
  
  .created-box {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  
  .admin-edit-article {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
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
</style>