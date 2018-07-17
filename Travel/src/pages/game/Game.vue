<template>
  <div>
    <game-header></game-header>
    <game-search :cities="cities"></game-search>
    <game-list :list="list"
               :guideVal = "guideVal"
    ></game-list><!--guide的值传给list-->
    <game-guide :guide="guide"
    @change = "handleGuide"
    ></game-guide>
  </div>
</template>

<script>
import GameHeader from './components/Header'
import GameSearch from './components/Search'
import GameList from './components/List'
import GameGuide from './components/Guide'
import axios from 'axios'
export default {
  name: "Game",
  components: {
    GameHeader,
    GameSearch,
    GameList,
    GameGuide
  },
  data () {
    return {
      list: [],
      guide: [],
      guideVal: ""
    }
  },
  methods: {
    getGameInfo () {
      axios.get('/api/game.json').then(this.handleGame)
    },
    handleGame (res) {
      res = res.data;
      if(res.ret){
        this.list = res.list;
        this.guide = res.guide;
      }
    },
    handleGuide (res) {
      //获取传递的值
      this.guideVal = res;
    }
  },
  mounted () {
    this.getGameInfo()
  }
}
</script>

<style scoped>

</style>
