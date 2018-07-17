<template>
    <div>
      <div class="title">3A</div>
      <ul class="row" style="margin: 0">
        <li class="item border-bottom" v-for="item in reList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img img-responsive" :src="item.url">
          </div>
          <div class="item-info">
            <p class="item-title ">{{item.title}}<small>{{item.small}}</small></p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="btn btn-info infoBtn">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "Recommond",
  data () {
    return {
      reList: [
        {
          id: '001',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531796547205&di=f4a973d4243fd687ada603342a80ffb8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0178315a44b3eba8012197419a8972.png%401280w_1l_2o_100sh.png',
          title: '马里奥赛车',
          small: '任天堂',
          desc: '销量突破114514万份 收到的人都目力了'
        },
        {
          id: '002',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531796547205&di=f4a973d4243fd687ada603342a80ffb8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0178315a44b3eba8012197419a8972.png%401280w_1l_2o_100sh.png',
          title: '马里奥赛车',
          small: '任天堂',
          desc: '销量突破114514万份 收到的人都目力了'
        },
        {
          id: '003',
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531796547205&di=f4a973d4243fd687ada603342a80ffb8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0178315a44b3eba8012197419a8972.png%401280w_1l_2o_100sh.png',
          title: '马里奥赛车',
          small: '任天堂',
          desc: '销量突破114514万份 收到的人都目力了'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../../../assets/style/mixins.styl"
  .title
    line-height 1rem
    background #eee
    text-indent .8rem
  .item
    display flex
    flex-direction row
    height 150px
    overflow hidden
    padding .4rem
    .item-img-wrapper
      width 30%
      .item-img
        height 100%
    .item-info
      position relative
      box-sizing border-box
      padding .4rem
      width 60%
      flex 1
      .item-title
        ellipsis()
      .infoBtn
        position absolute
        bottom 0
        right 0
</style>
