<template>
  <div class="my-admin-menu">
    <div class="menu-item">文章</div>
    <div>Disk</div>
  </div>
</template>

<script>
export default {
  name: 'MyAdminMenu',
}
</script>

<style scoped>
  .my-admin-menu {
    width: 200px;
    height: 60px;
    border-right: 1px solid rgb(180, 180, 180);
  } 

  .menu-item {
    width: 100%;
    height: 25px;
  }
</style>