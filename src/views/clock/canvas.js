import hImage from 'static/images/clock/icon_hour.png'
import mImage from 'static/images/clock/icon_minute.png'
import sImage from 'static/images/clock/icon_second.png'

let ctx
const dotX = 400
const dotY = 400
const outerR = 300
const innerR = 270
const dialColor = '#7FFFD4'
const h = {
  color: '#87CEFA',
  image: {
    url: hImage,
    target: null
  }
}
const m = {
  color: '#20B2AA',
  image: {
    url: mImage,
    target: null
  }
}
const s = {
  color: '#AFEEEE',
  image: {
    url: sImage,
    target: null
  }
}

// 初始化数据
async function init (ele) {
  ctx = ele.getContext('2d')

  // 获取时针、分针、秒针的图片
  const hPromise = getImage(h.image.url)
  const mPromise = getImage(m.image.url)
  const sPromise = getImage(s.image.url)
  const res = await Promise.all([hPromise, mPromise, sPromise])
  h.image.target = res[0]
  m.image.target = res[1]
  s.image.target = res[2]
  setInterval(render, 50)
}
// 获取图片
function getImage (src) {
  return new Promise(resolve => {
    const image = new Image()

    image.src = src
    image.onload = () => {
      resolve(image)
    }
  })
}
// 绘制指针
function drawImage (e, rotate) {
  const x = -e.target.height / 2
  const y = -e.target.height / 2

  ctx.save()
  // 设置圆心位置
  ctx.translate(dotX, dotY)
  // 设置旋转角度
  ctx.rotate(rotate)
  ctx.drawImage(e.target, x, y, e.target.width, e.target.height)
  ctx.restore()
}
// 时钟渲染
async function render () {
  ctx.clearRect(0, 0, 800, 800)
  // 绘制外圈
  ctx.save()
  ctx.beginPath()
  ctx.arc(dotX, dotY , outerR, 0, 2 * Math.PI)
  ctx.strokeStyle = dialColor
  ctx.stroke()
  // 绘制内圈
  ctx.beginPath()
  ctx.arc(dotX, dotY , innerR, 0, 2 * Math.PI)
  ctx.strokeStyle = dialColor
  ctx.stroke()
  ctx.restore()
  // 绘制圆心
  ctx.beginPath()
  ctx.arc(dotX, dotY , 4, 0, 2 * Math.PI)
  ctx.strokeStyle = dialColor
  ctx.stroke()
  ctx.restore()
  // 绘制时针刻度
  drawHourHand()
  // 绘制分针刻度
  drawMinuteHand()
  // 绘制时间指针
  drawPointer()
}
// 绘制时针刻度
function drawHourHand () {
  for (let i = 0; i < 12; i++) {
    ctx.save()
    // 设置线条颜色
    ctx.strokeStyle = dialColor
    // 设置圆心位置
    ctx.translate(dotX, dotY)
    // 设置旋转角度
    ctx.rotate(30 * Math.PI / 180 * i)
    ctx.beginPath()
    ctx.lineWidth = 3
    // 线条开始位置
    ctx.moveTo(0, outerR)
    // 线条结束位置
    ctx.lineTo(0, innerR)
    ctx.fillStyle = dialColor
    ctx.font = '24px Arial bold'
    // 水平对齐方式
    ctx.textAlign = "center"
    // 垂直对齐方式
    ctx.textBaseline = "middle"
    ctx.fillText(i === 0 ? 12 : i, 0, 40 - innerR)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }
}
// 绘制分针刻度
function drawMinuteHand () {
  for (let i = 0; i < 60; i++) {
    ctx.save()
    // 设置线条颜色
    ctx.strokeStyle = dialColor
    // 设置圆心位置
    ctx.translate(dotX, dotY)
    // 设置旋转角度
    ctx.rotate(6 * Math.PI / 180 * i)
    ctx.beginPath()
    ctx.lineWidth = 1.5
    // 线条开始位置
    ctx.moveTo(0, outerR)
    // 线条结束位置
    ctx.lineTo(0, innerR + 15)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }
}
// 根据当前时间绘制时、分、秒针
async function drawPointer () {
  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][date.getDay()]
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let millisecond = date.getMilliseconds()
  let hourEnd = degToRad((hour + minute / 60) * 30 - 90)
  let minuteEnd = degToRad((minute + second / 60) * 6 - 90)
  let secondEnd = degToRad((second + millisecond / 1000) * 6 - 90)
  let timePoint = hour > 12 ? '下午' : hour === 12 ? '中午' : '上午'

  hour = hour > 12 ? hour - 12 : hour
  // 绘制时针
  ctx.save()
  ctx.beginPath()
  ctx.strokeStyle = h.color
  ctx.arc(dotX, dotY, innerR - 18, degToRad(0), hourEnd)
  ctx.stroke()
  ctx.restore()
  drawImage(h.image, hourEnd)
  // 绘制分针
  ctx.save()
  ctx.beginPath()
  ctx.strokeStyle = m.color
  ctx.arc(dotX, dotY, innerR - 12, degToRad(0), minuteEnd)
  ctx.stroke()
  ctx.restore()
  drawImage(m.image, minuteEnd)
  // 绘制秒针
  ctx.save()
  ctx.beginPath()
  ctx.strokeStyle = s.color
  ctx.arc(dotX, dotY, innerR - 6, degToRad(0), secondEnd)
  ctx.stroke()
  ctx.restore()
  drawImage(s.image, secondEnd)
  // 绘制日期时间文字
  ctx.save()
  ctx.fillStyle = dialColor
  ctx.font = '24px Arial bold'
  // 水平对齐方式
  ctx.textAlign = "center"
  // 垂直对齐方式
  ctx.textBaseline = "middle"
  ctx.fillText(`${year}/${handleTime(month)}/${handleTime(day)} ${week}`, dotX, 20)
  ctx.font = '20px Arial'
  ctx.fillText(`${timePoint} ${handleTime(hour)}:${handleTime(minute)}:${handleTime(second)}`, dotX, 60)
  ctx.restore()
}
// 获取弧度
function degToRad (degree) {
  let result
  let factor = Math.PI / 180

  if (degree === 0) {
    result = 270 * factor
  }else{
    result = degree * factor
  }

  return result
}
// 处理时间
function handleTime (v) {
  if (Number(v) > 9) {
    return v
  } else {
    return `0${v}`
  }
}

export default init

