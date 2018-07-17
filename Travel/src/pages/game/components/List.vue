<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">Current</div>
          <div class="btnClass">
            <button class=" btn btn-warning btn-block" style="margin: 0">EA</button>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">Hot</div>
          <div class="btnClass">
            <button class=" btn btn-warning btn-block" style="margin: 0">EA</button>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">EA</div>
          <div class="game-list">
            <div class="game border-bottom">Ass</div>
            <div class="game border-bottom">Ass</div>
            <div class="game border-bottom">Ass</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "List",
  props: {
    list: Array //传入未使用
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)   //  上下滑动效果
  }
}
</script>

<style scoped lang="stylus">
  .list
    position absolute
    top 5.8rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height 2rem
      padding-left .5rem
      background #eee
      color black
    .btnClass
      display inline-block
      width 23%
      .btn-block
        margin .4rem
    .game-list
      padding-left .5rem
      line-height 2rem
</style>
