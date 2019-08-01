<template>
    <div class="elmNavigation">
      <van-nav-bar title="" left-text="ele.me">
        <span slot="right" class="right-text">登录</span>
        <span slot="right" class="right-text">|</span>
        <span slot="right" class="right-text">注册</span>
      </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "elmNavigation"
    }
</script>

<style scoped lang="less">
  .van-nav-bar{
    color: #fff;
    background: #3190e8;
    .van-nav-bar__text{
      color: #fff;
      font-size: 0.164rem;
    }
    .van-nav-bar__right{
      .right-text{
        font-size: 0.152rem;
        font-weight: 300;
      }
    }
  }
</style>
