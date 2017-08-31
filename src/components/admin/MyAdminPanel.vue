<template>
  <div class="my-admin-panel-box">
    <my-admin-article-list></my-admin-article-list>
  </div>
</template>

<script>
import MyAdminEditArticle from '@/components/admin/MyAdminEditArticle.vue';
import MyAdminArticleList from '@/components/admin/MyAdminArticleList.vue';
export default {
  name: 'MyAdminPanel',
  components: {
    MyAdminEditArticle,
    MyAdminArticleList
  }
}
</script>

<style scoped>
  
</style>