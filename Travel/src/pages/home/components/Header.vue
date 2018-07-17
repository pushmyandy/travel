<template>
      <div class="navHeader">
        <div class="col-xs-1 backIcon">
          <span class="iconfont">&#xe624;</span>
        </div>
        <div class="col-xs-8 navInput">
          <input type="text" placeholder="search"/>
        </div>
        <router-link to="/Game">
          <div class="col-xs-2 navCity">
            <span class="iconfont">&#xe62d;</span>
            <span>{{this.game}}</span>
            <!--this.$store.state.game-->
          </div>
        </router-link>
      </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: "HomeHeader",
  props: {
    game: String
  },
  computed: {
    ...mapState(['game']), //把game公用属性映射到当前的叫game的属性 ES6写法
    ...mapState({
      currentGame: 'game'//把公用game映射到计算属性中 名字叫currentGame
    }),
    ...mapMutations([
      'changeGame' //把changeGamemutation映射到当前页面
    ])
  }
}
</script>

<style scoped lang="stylus">
  .navHeader
    height 4rem
    background cornflowerblue
    text-align center
    .backIcon
      margin-left .3rem
      text-align center
      height 4rem
      line-height 4rem
      color white
    .navInput
      padding 0.5rem 0rem 0.5rem 1rem
      height 4rem
      input
        width 100%
        height 100%
        border-radius 0.5rem
        padding-left 1rem
    .navCity
      float right
      margin-left .5rem
      margin-right .5rem
      padding 0
      color white
      height 4rem
      line-height 4rem
      span
        padding 0
</style>
