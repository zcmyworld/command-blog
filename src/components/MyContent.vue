<template>
  <div class="content">
    HelloWorld
    <my-article></my-article>
  </div>
</template>

<script>
import MyArticle from '@/components/MyArticle.vue';
export default {
  name: 'MyContent',
  components: {
    MyArticle
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>