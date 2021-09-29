// 文字颜色
const color = '#00FFFF'
// 文字样式
const font = '12px Arial bold'
// 激活字体样式
const active = {
  color: '#00FFFF',
  font: '12px Arial bold'
}
// 字间距
const letterSpace = 16
// 画板
let ele,ctxY,ctxM,ctxD,ctxW,ctxH,ctxF,ctxS
// 圆心X坐标
const dotX = 470
// 圆心Y坐标
const dotY = 470
// 月份半径
const mRadius = 64
// 日期半径
const dRadius = 128
// 星期半径
const wRadius = 210
// 时刻半径
const hRadius = 260
// 分刻半径
const fRadius = 330
// 秒刻半径
const sRadius = 410
let hasRender = false

// 获取当前时间参数
function getCurrentTime () {
  const date = new Date()
  // 年
  let year = date.getFullYear()
  // 月
  let month = date.getMonth()
  // 日
  let day = date.getDate()
  // 星期
  let week = date.getDay()
  // 时
  let hour = date.getHours()
  // 分
  let minute = date.getMinutes()
  // 秒
  let second = date.getSeconds()
  // 毫秒
  let millisecond = date.getMilliseconds()

  date.setMonth(month + 1)
  date.setDate(0)
  // 当月天数
  let days = date.getDate()

  return { year, month, day, week, hour, minute, second, millisecond, days }
}
// 计算当前时间下的旋转弧度
function calculateRadian (radian, v) {
  const count = Math.floor(1.5 * Math.PI / radian) // 间距数量

  return (count - v) * radian - (count * radian - 1.5 * Math.PI)
}
// 绘制当前年份
function renderYear (year) {
  ctxY.beginPath()
  ctxY.fillStyle = active.color
  ctxY.font = active.font
  ctxY.textAlign = "center"
  ctxY.textBaseline = "middle"
  ctxY.fillText(`${year}年`, dotX, dotY)
}
// 绘制月份
function renderMonth (m) {
  const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  const rotate = 30 // 度数
  const radian = Math.PI / 6 // 弧度
  const angle = calculateRadian(radian, m) // 开始弧度

  for (let i = 0; i < 12; i++) {
    let textArray = months[i].split('')

    ctxM.save()
    // 设置圆心位置
    ctxM.translate(dotX, dotY)
    // 设置旋转角度
    ctxM.rotate(rotate * Math.PI / 180 * i + angle)
    ctxM.fillStyle = i === m ? active.color : color
    ctxM.font = i === m ? active.font : font
    ctxM.textAlign = "center"
    ctxM.textBaseline = "middle"
    // eslint-disable-next-line no-loop-func
    textArray.forEach((v, index) => {
      ctxM.fillText(v, 0, mRadius + letterSpace * index)
    })
    ctxM.restore()
  }

  return { rotate, radian, month: m }
}
// 绘制日期
function renderDay (d, days) {
  const data = ['一号', '二号', '三号', '四号', '五号', '六号', '七号', '八号', '九号', '十号', '十一号', '十二号', '十三号', '十四号' , '十五号', '十六号', '十七号', '十八号', '十九号', '二十号', '二十一号', '二十二号', '二十三号', '二十四号', '二十五号', '二十六号', '二十七号', '二十八号', '二十九号', '三十号', '三十一号']
  const rotate = 360 / days // 度数
  const radian = 2 * Math.PI / days // 弧度
  const angle = calculateRadian(radian, d - 1) // 开始弧度

  for (let i = 0; i < days; i++) {
    let textArray = data[i].split('')

    ctxD.save()
    // 设置圆心位置
    ctxD.translate(dotX, dotY)
    // 设置旋转角度
    ctxD.rotate(rotate * Math.PI / 180 * i + angle)
    ctxD.fillStyle = i === d - 1 ? active.color : color
    ctxD.font = i === d - 1 ? active.font : font
    ctxD.textAlign = "center"
    ctxD.textBaseline = "middle"
    // eslint-disable-next-line no-loop-func
    textArray.forEach((v, index) => {
      ctxD.fillText(v, 0, dRadius + letterSpace * index)
    })
    ctxD.restore()
  }

  return { rotate, radian, day: d, days }
}
// 绘制星期
function renderWeek (w) {
  const data = ['周天', '周一', '周二', '周三', '周四', '周五', '周六']
  const rotate = 360 / 7 // 度数
  const radian = 2 * Math.PI / 7 // 弧度
  const angle = calculateRadian(radian, w) // 开始弧度

  for (let i = 0; i < 7; i++) {
    let textArray = data[i].split('')

    ctxW.save()
    // 设置圆心位置
    ctxW.translate(dotX, dotY)
    // 设置旋转角度
    ctxW.rotate(rotate * Math.PI / 180 * i + angle)
    ctxW.fillStyle = i === w ? active.color : color
    ctxW.font = i === w ? active.font : font
    ctxW.textAlign = "center"
    ctxW.textBaseline = "middle"
    // eslint-disable-next-line no-loop-func
    textArray.forEach((v, index) => {
      ctxW.fillText(v, 0, wRadius + letterSpace * index)
    })
    ctxW.restore()
  }

  return { rotate, radian, week: w }
}
// 绘制时刻
function renderHour (h) {
  const data = ['一时', '二时', '三时', '四时', '五时', '六时', '七时', '八时', '九时', '十时', '十一时', '十二时']
  const conversion = h > 12 ? h - 13 : h - 1
  const rotate = 30 // 度数
  const radian = Math.PI / 6 // 弧度
  const angle = calculateRadian(radian, conversion) // 开始弧度

  for (let i = 0; i < 12; i++) {
    let textArray = data[i].split('')

    ctxH.save()
    // 设置圆心位置
    ctxH.translate(dotX, dotY)
    // 设置旋转角度
    ctxH.rotate(rotate * Math.PI / 180 * i + angle)
    ctxH.fillStyle = i === conversion ? active.color : color
    ctxH.font = i === conversion ? active.font : font
    ctxH.textAlign = "center"
    ctxH.textBaseline = "middle"
    // eslint-disable-next-line no-loop-func
    textArray.forEach((v, index) => {
      ctxH.fillText(v, 0, hRadius + letterSpace * index)
    })
    ctxH.restore()
  }

  return { rotate, radian, hour: h }
}
// 绘制分
function renderMinute (m) {
  const data = ['一分', '二分', '三分', '四分', '五分', '六分', '七分', '八分', '九分', '十分',
  '十一分', '十二分', '十三分', '十四分', '十五分', '十六分', '十七分', '十八分', '十九分', '二十分',
  '二十一分', '二十二分', '二十三分', '二十四分', '二十五分', '二十六分', '二十七分', '二十八分', '二十九分', '三十分',
  '三十一分', '三十二分', '三十三分', '三十四分', '三十五分', '三十六分', '三十七分', '三十八分', '三十九分', '四十分',
  '四十一分', '四十二分', '四十三分', '四十四分', '四十五分', '四十六分', '四十七分', '四十八分', '四十九分', '五十分',
  '五十一分', '五十二分', '五十三分', '五十四分', '五十五分', '五十六分', '五十七分', '五十八分', '五十九分', '六十分']
  const rotate = 6 // 度数
  const radian = Math.PI / 30 // 弧度
  const angle = calculateRadian(radian, m - 1) // 开始弧度

  for (let i = 0; i < 60; i++) {
    let textArray = data[i].split('')

    ctxF.save()
    // 设置圆心位置
    ctxF.translate(dotX, dotY)
    // 设置旋转角度
    ctxF.rotate(rotate * Math.PI / 180 * i + angle)
    ctxF.fillStyle = i === m - 1 ? active.color : color
    ctxF.font = i === m - 1 ? active.font : font
    ctxF.textAlign = "center"
    ctxF.textBaseline = "middle"
    // eslint-disable-next-line no-loop-func
    textArray.forEach((v, index) => {
      ctxF.fillText(v, 0, fRadius + letterSpace * index)
    })
    ctxF.restore()
  }

  return { rotate, radian, minute: m }
}
// 绘制秒
function renderSecond (s) {
  const data = ['一秒', '二秒', '三秒', '四秒', '五秒', '六秒', '七秒', '八秒', '九秒', '十秒',
  '十一秒', '十二秒', '十三秒', '十四秒', '十五秒', '十六秒', '十七秒', '十八秒', '十九秒', '二十秒',
  '二十一秒', '二十二秒', '二十三秒', '二十四秒', '二十五秒', '二十六秒', '二十七秒', '二十八秒', '二十九秒', '三十秒',
  '三十一秒', '三十二秒', '三十三秒', '三十四秒', '三十五秒', '三十六秒', '三十七秒', '三十八秒', '三十九秒', '四十秒',
  '四十一秒', '四十二秒', '四十三秒', '四十四秒', '四十五秒', '四十六秒', '四十七秒', '四十八秒', '四十九秒', '五十秒',
  '五十一秒', '五十二秒', '五十三秒', '五十四秒', '五十五秒', '五十六秒', '五十七秒', '五十八秒', '五十九秒', '六十秒']
  const rotate = 6 // 度数
  const radian = Math.PI / 30 // 弧度
  const angle = calculateRadian(radian, s - 1) // 开始弧度

  for (let i = 0; i < 60; i++) {
    let textArray = data[i].split('')

    ctxS.save()
    // 设置圆心位置
    ctxS.translate(dotX, dotY)
    // 设置旋转角度
    ctxS.rotate(rotate * Math.PI / 180 * i + angle)
    ctxS.fillStyle = i === s - 1 ? active.color : color
    ctxS.font = i === s - 1 ? active.font : font
    ctxS.textAlign = "center"
    ctxS.textBaseline = "middle"
    // eslint-disable-next-line no-loop-func
    textArray.forEach((v, index) => {
      ctxS.fillText(v, 0, sRadius + letterSpace * index)
    })
    ctxS.restore()
  }

  return { rotate, radian, second: s }
}
// 渲染时钟罗盘
function render ({ yearEle, monthEle, dayEle, weekEle, hourEle, minuteEle, secondEle }) {
  let yParam,mParam,dParam,wParam,hParam,fParam,sParam

  ele = { yearEle, monthEle, dayEle, weekEle, hourEle, minuteEle, secondEle }
  setInterval(() => {
    const { year, month, day, days, week, hour, minute, second } = getCurrentTime()

    // 判断是否渲染
    if (hasRender) {
      let { totalRotateS = 0, totalRotateF = 0, totalRotateH = 0, totalRotateW = 0, totalRotateD = 0, totalRotateM = 0 } = sParam
      // 判断秒
      if (sParam.second <= second) { // 没超过60秒
        totalRotateS -= (second - sParam.second) * sParam.rotate
        ele.secondEle.style.transform = `rotate(${totalRotateS}deg)`
      } else {
        totalRotateS -= (60 - sParam.second + second) * sParam.rotate
        ele.secondEle.style.transform = `rotate(${totalRotateS}deg)`

        // 判断分
        if (fParam.minute <= minute) { // 没超过60分
          totalRotateF -= (minute - fParam.minute) * fParam.rotate
          ele.minuteEle.style.transform = `rotate(${totalRotateF}deg)`
        } else {
          totalRotateF -= (60 - fParam.minute + minute) * fParam.rotate
          ele.secondEle.style.transform = `rotate(${totalRotateF}deg)`
        }
      }

      sParam = { ...sParam, totalRotateS }
    } else {
      ctxY = yearEle.getContext('2d')
      ctxM = monthEle.getContext('2d')
      ctxD = dayEle.getContext('2d')
      ctxW = weekEle.getContext('2d')
      ctxH = hourEle.getContext('2d')
      ctxF = minuteEle.getContext('2d')
      ctxS = secondEle.getContext('2d')

      // 绘制当前年份
      renderYear(year)
      // 绘制月份
      mParam = renderMonth(month)
      // 绘制日期
      dParam = renderDay(day, days)
      // 绘制星期
      wParam = renderWeek(week)
      // 绘制时刻
      hParam = renderHour(hour)
      // 绘制分
      fParam = renderMinute(minute)
      // 绘制秒
      sParam = renderSecond(second)
      hasRender = true
    }

    yParam = { ...yParam, year }
    mParam = { ...mParam, month }
    dParam = { ...dParam, day, days }
    wParam = { ...wParam, week }
    hParam = { ...hParam, hour }
    fParam = { ...fParam, minute }
    sParam = { ...sParam, second }
  }, 1000)
}


export default render
