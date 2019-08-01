<template>
  <div id="app">
    <elm-header></elm-header>
    <router-view/>
    <elm-footer></elm-footer>
  </div>
</template>

<script>
import ElmHeader from "./components/elmHeader/elmHeader";
import ElmFooter from "./components/elmFooter/elmFooter";
export default {
  name: 'App',
  components: {ElmFooter, ElmHeader}
}
</script>

<style scoped lang="less">
#app {
}
</style>
