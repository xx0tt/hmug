import fly from '@/utils/request.js'

// 获取轮播图
export const getBannersApi = () => fly.get('/home/swiperdata')
// 获取导航栏
export const getNavsApi = () => fly.get('/home/catitems')
// 获取楼层
export const getFloorApi = () => fly.get('/home/floordata')
