<template>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
</template>

<script>
export default {
  name: "Guide"
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
