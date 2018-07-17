<template>
  <div>
    <div class="header">
      <router-link to="/">
        <span class="iconfont back">&#xe624;</span>
      </router-link>
      IN LOS ANGLES
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="stylus">
  .header
    position relative
    overflow hidden
    text-align center
    height 3rem
    background #5bc0de
    line-height 3rem
    color white
    .back
      color white
      position absolute
      margin-left 1rem
      left 0
      text-align center
</style>
