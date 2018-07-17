<template>
  <div>
    <home-header :game = "game"></home-header>
    <home-swiper></home-swiper>
    <home-icons :list = "list"></home-icons>
    <home-recommond></home-recommond>
    <home-pay></home-pay>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommond from './components/Recommond'
import HomePay from './components/Pay'
import axios from 'axios'

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommond,
    HomePay
  },
  data () {
    return {
      game: "",
      list: []
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/home.json').then(this.getData).catch()
    },
    getData (res) {
      if(res.data.re) {
        this.game = res.data.game;
        this.list = res.data.iconList;
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scoped>

</style>
