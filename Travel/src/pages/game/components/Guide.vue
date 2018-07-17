<template>
    <ul class="list">
      <li class="item" v-for="item in guide"
      ref="offsetLength"
      @click = "handleGuideClick"
      @touchstart = "handleTouchStart"
      @touchmove = "handleTouchMove"
      @touchend = "handleTouchEnd"
      >{{item.num}}</li>
    </ul>
</template>

<script>
export default {
  name: "Guide",
  props: ["guide"],
  data () {
    return {
      touchStatus: false,
      timer: null   //节流
    }
  },
  computed: {
    letters () {
      const letter = []
      for(let i in this.guide){
        letter.push(i);
      }
      return letter
    } //【A,B,C】
  },
  methods: {
    handleGuideClick (e) {
      //获取点击的字母
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true //touchstart 开始时才允许执行touchmove和end
    },
    handleTouchMove (e) {
      if(this.timer){
        clearTimeout(this.timer)
      }//函数节流
      this.timer = setTimeout(() => {
        if(this.touchStatus) {
          const length = this.$refs['offsetLength'][0].offsetTop;//元素距离顶部的高度
          const touchY = e.touches[0].clientY; //手指距离顶部距离 要减去A距离顶部距离
          const index = Math.floor((touchY - StartY)/ 20);//计算是第几个元素
          this.$emit('change',this.guide[index])
        }
      }, 500);
    },
    handleTouchEnd () {

    }
  }
}
</script>

<style scoped lang="stylus">
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 5.8rem
    right 0
    bottom 0
    width 1rem
    background cornflowerblue
    color white
    .item
      text-align center
      line-height 1.5rem
</style>
