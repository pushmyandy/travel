<template>
    <div class="icons">
      <swiper class="swiper">
        <swiper-slide v-for="page of pages">
          <div class="icon" v-for="item in page" :key="item.id">
            <img :src="item.src">
            <p>{{item.text}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data () {
    return {
        iconList: [
          {
            id:'001',
            src:'https://img.alicdn.com/i2/2/TB1lL6xPVXXXXcTXpXXSutbFXXX.jpg_90x90q90.jpg',
            text: 'SA'
          },
          {
            id: '002',
            src:'https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_90x90q90.jpg',
            text: 'Ite'
          },
          {
            id: '003',
            src:'https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_90x90q90.jpg',
            text: 'Ite'
          },
          {
            id: '004',
            src:'https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_90x90q90.jpg',
            text: 'Ite'
          },
          {
            id: '005',
            src:'https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_90x90q90.jpg',
            text: 'Ite'
          },
          {
            id: '006',
            src:'https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_90x90q90.jpg',
            text: 'Ite'
          },
          {
            id: '007',
            src:'https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_90x90q90.jpg',
            text: 'Ite'
          },
          {
            id: '008',
            src:'https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_90x90q90.jpg',
            text: 'Ite'
          },
          {
            id: '009',
            src:'https://img.alicdn.com/i2/2/T1tzyoXnd3XXb1upjX.jpg_90x90q90.jpg',
            text: 'Ite'
          }
        ]
    }
  },
  computed: {
    pages () {
      const  pages  = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index/8);
        if(!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item)

      });
      return pages
    }
  }
}
</script>
<style scoped lang="stylus">
  .icons >>> .swiper
    height 0
    padding-bottom 50%
  .icons
    height 0
    padding-bottom 50%
    overflow hidden
    margin 0
    .icon
      box-sizing border-box
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 24%
      border 1px solid black
      position relative
      img
        width 100%
      p
        bottom 0
        text-align center
        position absolute
        left 40%
        margin 0
</style>
