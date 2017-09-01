<template>
  <div class="my-admin-panel-box">
    <router-view></router-view>
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