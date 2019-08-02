<template>
  <div class="mainP">
    <router-view></router-view>
    <!--底部-->
    <van-tabbar v-model="active" class="footer-tabbar">
      <van-tabbar-item icon="home-o" to="/mainP/msite">外卖</van-tabbar-item>
      <van-tabbar-item icon="search" to="/mainP/searchgood">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mainP/order">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mainP/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'mainP',
    data() {
      return {
        active: 0
      }
    },
  };
</script>
<style scoped lang="less">
  @import "_mainP";
</style>
