// 普通错误提示
function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'none',
    duration
  })
}

// error错误提示
toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration
  })
}

// 成功提示
toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'success',
    duration
  })
}

// 加载中提示
toast.loading = function() {
  uni.showToast({
    title: '正在加载中...',
    icon: "loading"
  })
}

export default toast
