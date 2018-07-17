<template>
  <div>
    <game-header></game-header>
    <game-search></game-search>
    <game-list :list="list"></game-list>
    <game-guide></game-guide>
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
      list: []
    }
  },
  methods: {
    getGameInfo () {
      axios.get('/api/game.json').then(this.handleGame)
    },
    handleGame (res) {
      res = res.data;
      if(res.ret){
        this.list = res.list
      }
    }
  },
  mounted () {
    this.getGameInfo()
  }
}
</script>

<style scoped>

</style>
