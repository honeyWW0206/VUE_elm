<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import ElmHeader from "./components/elmHeader/elmHeader";
import ElmFooter from "./components/elmFooter/elmFooter";
export default {
  name: 'App',
}
</script>

<style scoped lang="less">
#app {
}
</style>
