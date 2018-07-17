<template>
<div class="row" style="margin: 0">
  <ul>
    <li class="img" v-for="item in payInfo" :key="item.id">
      <img class="img-responsive" :src="item.url">
      <p class="payInfo">{{item.free}}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Pay",
  data () {
    return {
      payInfo: [
        {
          id: '001',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531798938253&di=fc12a63a4a4de0db7aacbbf9e7e86f86&imgtype=0&src=http%3A%2F%2Fwww.91danji.com%2Fupload%2F20121128%2F20121128165807007.jpg',
          free: '10% off'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .img
    width 100%
    height 200px
    img
      width 100%
      height 100%
    p
      text-align right
</style>
