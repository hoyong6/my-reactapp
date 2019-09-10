// 放置全局工具类函数

export function  fncDT (d, nt) {
  if (!d) {
    return '时间戳格式错误'
  }

  let time = new Date((parseInt(d) + 28800) * 1000)
  let ymd =
    time.getUTCFullYear() +
    '/' +
    (time.getUTCMonth() + 1 < 10 ? '0' : '') +
    (time.getUTCMonth() + 1) +
    '/' +
    (time.getUTCDate() < 10 ? '0' : '') +
    time.getUTCDate() +
    ' '

  if (nt) {
    return ymd
  }

  return (
    ymd +
    time.getUTCHours() +
    ':' +
    (time.getUTCMinutes() < 10 ? '0' : '') +
    time.getUTCMinutes()
  )
}

export function resultFormat(result) {
  var h = Math.floor(result/3600%24);
  var m = Math.floor(result/60%60);
  var s = Math.floor(result%60);
  if (h < 1) {
      return result = m + "分钟" + s + "秒"
  } else {
      return result = h + "小时" + m + "分钟" + s + "秒"
  }
}