<template>
  <div class="content">
    <my-article></my-article>
    <my-article></my-article>
    <my-article></my-article>
    <my-article></my-article>
  </div>
</template>

<script>
import MyArticle from '@/components/article/MyArticle.vue';
export default {
  name: 'MyContent',
  components: {
    MyArticle
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
</style>