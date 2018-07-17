<template>
  <div>
    <game-header></game-header>
    <game-search></game-search>
    <game-list></game-list>
    <game-guide></game-guide>
  </div>
</template>

<script>
import GameHeader from './components/Header'
import GameSearch from './components/Search'
import GameList from './components/List'
import GameGuide from './components/Guide'
export default {
  name: "Game",
  components: {
    GameHeader,
    GameSearch,
    GameList,
    GameGuide
  }
}
</script>

<style scoped>

</style>
