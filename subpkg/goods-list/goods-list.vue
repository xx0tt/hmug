<template>
  <view>
    <van-card v-for="item in goods" :key="item.goods_id" :price="item.goods_price | toFixed" :title="item.goods_name"
      :thumb-link='`/subpkg/goods-detail/goods-detail?id=${item.goods_id}`'
      :thumb="item.goods_small_logo || defaultPic" />
  </view>
</template>

<script>
  import {
    getGoosListApi
  } from '@/api/goods.js'
  import toast from '@/utils/toast.js'
  export default {
    data() {
      return {
        queryData: {
          query: '', // 关键字
          cid: '', // 分类ID
          pagenum: 1, // 页码
          pagesize: 10 // 每页条数
        },
        goods: [],
        total: 0,
        isLoading: false,
        // 默认的空图片
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      };
    },
    methods: {
      // 获取商品列表
      async getGoosList(callback) {
        this.isLoading = true
        const res = await getGoosListApi(this.queryData)
        this.goods = [...this.goods, ...res.goods]
        this.total = res.total
        this.isLoading = false
        callback && callback()
      }
    },
    onLoad(options) {
      this.queryData.query = options.query
      this.getGoosList()
    },
    // 下拉刷新
    onPullDownRefresh() {
      if (this.isLoading) return
      this.queryData = {
        query: this.queryData.query, // 关键字
        cid: '', // 分类ID
        pagenum: 1, // 页码
        pagesize: 10 // 每页条数
      }
      this.goods = []
      this.total = 0
      // 重新获取
      this.getGoosList(() => uni.stopPullDownRefresh())
    },
    // 上拉触底
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pagesize >= this.total) return toast('没有更多数据了')
      if (this.isLoading) return
      this.queryData.pagenum++
      this.getGoosList()
    }
  }
</script>

<style lang="scss">

</style>
