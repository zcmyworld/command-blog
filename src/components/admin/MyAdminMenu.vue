<template>
  <div class="my-admin-menu">
    <ul>
      <li class="menu-item">
        <span>文章</span>
      </li>
      <li class="menu-item">Disk</li>
      <li class="menu-item">文章</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyAdminMenu',
}
</script>

<style scoped>
  .my-admin-menu {
    width: 120px;
    border-right: 1px solid rgb(180, 180, 180);
  }
  
  .menu-item {
    width: 100%;
    height: 40px;
    font-size: 20px;
    color: #666;
    font-weight: 300;
    line-height: 1.5;
  }
</style>