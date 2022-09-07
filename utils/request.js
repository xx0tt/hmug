import FLY from 'flyio/dist/npm/wx'
import toast from '@/utils/toast.js'

const fly = new FLY()

// 配置基准地址 请求时间
fly.config.baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1'
fly.config.timeout = 5000

// 请求拦截器
fly.interceptors.request.use((config) => {
  toast.loading()
  return config
})

// 相应拦截器
fly.interceptors.response.use((response) => {
    uni.hideToast()
    return response.data.message
  },
  (error) => {
    toast.err('网络异常')
    return Promise.reject(error)
  })

export default fly
