<template>
  <div class="admin-edit-article">
    <div class="edit-title-box">
      <input class="edit-title" placeholder="   Title">
    </div>
    <div class="created-box">
      <span>Posted on 2017.05.02</span>
    </div>
    <summary-editor></summary-editor>
    <hr>
    <my-editor></my-editor>

  </div>
</template>

<script>
import MyEditor from './MyEditor';
import SummaryEditor from './SummaryEditor';
export default {
  name: 'MyAdminEditArticle',
  components: {
    MyEditor,
    SummaryEditor
  },
  created: function() {
    this.$http.get('http://itos.dev.com/articles/5').then((res) =>{
      this.article = res.body;
      console.log(this.article)
      return this;
    })
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