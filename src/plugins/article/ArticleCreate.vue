<template>
  <div class="admin-edit-article">
    <div class="edit-title-box">
      <input class="edit-title" placeholder="   Title" v-model="article.title">
    </div>
    <div class="created-box">
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
import Config from './Config';
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
    EventBus.$on('summary_change', (newsummary, mdsummary) => {
      this.article.summary = newsummary;
      this.article.mdsummary = newmdsummary;
      return this;
    });
    EventBus.$on('content_change', (newcontent, newmdcontent) => {
      this.article.content = newcontent;
      this.article.mdcontent = newmdcontent;
      return this;
    });
    EventBus.$on('content_create', () => {
      this.$http.post(`http://${Config.host}:${Config.port}/articles`, this.article, {
        headers: {
          'sessionkey': ITOS.Session.getSessionKey()
        }
      }).then((resData) =>{
        ITOS.Terminal.print(resData.body.msg);
        if (resData.body.code == 0) {
          ITOS.Router.router.push(`/article`);
          return;
        }
        return this;
      }).catch((err) => {
        console.log(err)
        ITOS.Terminal.print('save error .. ');
      });
    });
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