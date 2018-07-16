<template>
  <div class="container-fluid">
      <div class="navHeader row">
        <div class="col-xs-1 backIcon">
          <span class="iconfont">&#xe624;</span>
        </div>
        <div class="col-xs-8 navInput">
          <input type="text" placeholder="search"/>
        </div>
        <div class="col-xs-3 navCity">
          游戏
          <span class="iconfont">&#xe62d;</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
}
</script>

<style scoped lang="stylus">
  .navHeader
    height 4rem
    background cornflowerblue
    text-align center
    .backIcon
      text-align center
      height 4rem
      line-height 4rem
      color white
    .navInput
      padding 0.5rem 0 0.5rem 1rem
      height 4rem
      input
        width 100%
        height 100%
        border-radius 0.5rem
        padding-left 1rem
    .navCity
      float right
      color white
      height 4rem
      line-height 4rem
</style>
