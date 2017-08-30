<template>
  <div class="admin">
    <my-admin-menu></my-admin-menu>
    <my-admin-panel></my-admin-panel>
  </div>
</template>

<script>
import MyAdminMenu from '@/components/admin/MyAdminMenu.vue';
import MyAdminPanel from '@/components/admin/MyAdminPanel.vue';

export default {
  name: 'MyAdmin',
  components: {
    MyAdminMenu,
    MyAdminPanel,
  }
}
</script>

<style scoped>
  .admin {
    box-sizing: border-box;
    display: flex;
    margin-top: 30px;
    width: 1180px;
    margin-right: auto;
    margin-left: auto;
  } 
</style>