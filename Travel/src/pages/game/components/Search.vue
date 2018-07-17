<template>
  <div>
    <div class="container-fluid" style="padding: 0">
      <form>
        <input class="form-control inputS"
               v-model="list"
               placeholder="check it out"/>
      </form>
    </div>
    <div class="search-content" v-show="false">
      <ul>
        <li>用v-show来监控input框</li>
        <li>这里显示搜索到的值</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: ['cities'],
  watch: {
    keyword () {
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(()=>{
        const result = [];
        for(let i in this.cities) {
          this.cities[i].forEach((val, index) => {
            //逻辑 如果能从cities搜索到值 那么 就放入result
          })
        }
      }, 500)
    }
  }
}
</script>

<style scoped lang="stylus">
  .search-content
    overflow hidden
    position absolute
    top 5.8rem
    bottom 0
    left 0
    right 0
    z-index 999
</style>
