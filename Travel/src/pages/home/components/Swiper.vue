<template>
  <div class="row">
    <div class="col-sm-12 ">
      <swiper class="swiper" :options="swiperOption" >
        <swiper-slide v-for="item in swiperList">
          <a>
            <img :src="item.imgUrl" :key="item.id"/>
          </a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id:'',
        imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531756215226&di=056483b9ede18cecf41efb4b274f2845&imgtype=0&src=http%3A%2F%2Fatt.gamefy.cn%2Ffiles%2F201805%2Fatt152757858631537.jpg"
      }, {
        id:'',
        imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532351071&di=1728f25b39be8ade552c2f5484b2f381&imgtype=jpg&er=1&src=http%3A%2F%2Fi-2.yxdown.com%2F2015%2F6%2F29%2Fe99d03ec-ab0f-4796-bc1e-f79f085a5422.jpg"
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .swiper >>> .swiper-pagination-bullet-active
    background white !important
  .swiper
    height 20%
    overflow hidden
    img
      width 100%
      height 100%
</style>
