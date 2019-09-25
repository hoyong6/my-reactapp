import React from 'react'
class Playcanvas extends React.Component {
  constructor (props) {
    super(props)
    this.canvas = React.createRef()
    this.canvasCircle = React.createRef()
    this.canvasGradualChange = React.createRef()
    this.canvasRectangleChange = React.createRef()
    this.canvasRadialGradient = React.createRef()
  }

  componentDidMount () {
    this.draw()
    this.drawCircle()
    this.drawGradualChange()
    this.drawRectangleChange()
    this.drawCircleChange()
  }

  // 画一个球形渐变
  drawCircleChange () {
    const canvasRadialGradient = this.canvasRadialGradient.current
    if (canvasRadialGradient.getContext) {
      const ctx = canvasRadialGradient.getContext('2d')
      // 创建渐变
      var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 40)
      radgrad.addColorStop(0, '#A7D30C')
      radgrad.addColorStop(0.9, '#019F62')
      radgrad.addColorStop(1, 'rgba(1,159,98,0)')

      var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50)
      radgrad2.addColorStop(0, '#FF5F98')
      radgrad2.addColorStop(0.75, '#FF0188')
      radgrad2.addColorStop(1, 'rgba(255,1,136,0)')

      var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40)
      radgrad3.addColorStop(0, '#00C9FF')
      radgrad3.addColorStop(0.8, '#00B5E2')
      radgrad3.addColorStop(1, 'rgba(0,201,255,0)')

      var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90)
      radgrad4.addColorStop(0, '#F4F201')
      radgrad4.addColorStop(0.8, '#E4C700')
      radgrad4.addColorStop(1, 'rgba(228,199,0,0)')

      // 画图形
      ctx.fillStyle = radgrad4
      ctx.fillRect(0, 0, 150, 150)
      ctx.fillStyle = radgrad3
      ctx.fillRect(0, 0, 150, 150)
      ctx.fillStyle = radgrad2
      ctx.fillRect(0, 0, 150, 150)
      ctx.fillStyle = radgrad
      ctx.fillRect(0, 0, 150, 150)
    }
  }

  // 画一个矩形渐变
  drawRectangleChange () {
    const canvasRectangleChange = this.canvasRectangleChange.current
    if (canvasRectangleChange.getContext) {
      const ctx = canvasRectangleChange.getContext('2d')
      // 画背景
      ctx.fillStyle = 'rgb(255,221,0)'
      ctx.fillRect(0, 0, 150, 37.5)
      ctx.fillStyle = 'rgb(102,204,0)'
      ctx.fillRect(0, 37.5, 150, 37.5)
      ctx.fillStyle = 'rgb(0,153,255)'
      ctx.fillRect(0, 75, 150, 37.5)
      ctx.fillStyle = 'rgb(255,51,0)'
      ctx.fillRect(0, 112.5, 150, 37.5)

      // 画半透明矩形
      for (var i = 0; i < 10; i++) {
        ctx.fillStyle = 'rgba(255,255,255,' + (i + 1) / 10 + ')'
        for (var j = 0; j < 4; j++) {
          ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5)
        }
      }
    }
  }

  // 去画一个渐变
  drawGradualChange () {
    const canvasGradualChange = this.canvasGradualChange.current
    if (canvasGradualChange.getContext) {
      const ctx = canvasGradualChange.getContext('2d')
      // 画背景
      ctx.fillStyle = '#FD0'
      ctx.fillRect(0, 0, 75, 75)
      ctx.fillStyle = '#6C0'
      ctx.fillRect(75, 0, 75, 75)
      ctx.fillStyle = '#09F'
      ctx.fillRect(0, 75, 75, 75)
      ctx.fillStyle = '#F30'
      ctx.fillRect(75, 75, 75, 75)
      ctx.fillStyle = '#FFF'

      // 设置透明度值
      ctx.globalAlpha = 0.2

      // 画半透明圆
      for (var i = 0; i < 7; i++) {
        ctx.beginPath()
        ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true)
        ctx.fill()
      }
    }
  }

  // canvas 去画圈圈
  drawCircle () {
    const canvasCircle = this.canvasCircle.current
    if (canvasCircle.getContext) {
      const ctx = canvasCircle.getContext('2d')
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
                           Math.floor(255 - 42.5 * j) + ')'
          ctx.beginPath()
          ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
          ctx.stroke()
        }
      }
    }
  }

  // 对图像进行绘制
  draw () {
    // 这些 fillStyle 的值均为 '橙色'
    const canvas = this.canvas.current
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                           Math.floor(255 - 42.5 * j) + ',0)'
          ctx.fillRect(j * 25, i * 25, 25, 25)
        }
      }
    }
  }

  render () {
    return (
      <div>
        <canvas ref={this.canvas} width='150' height='150' />
        <canvas ref={this.canvasCircle} width='150' height='150' />
        <canvas ref={this.canvasGradualChange} width='150' height='150' />
        <canvas ref={this.canvasRectangleChange} width='150' height='150' />
        <canvas ref={this.canvasRadialGradient} width='150' height='150' />
      </div>
    )
  }
}
export default Playcanvas
