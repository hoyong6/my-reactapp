import React from 'react'
import { resultFormat } from '../utils.js'
import '../scss/clock.scss'
class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: this.timer }
    this.get18()
  }

  componentDidMount () { // 生命周期 挂载
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillMount () { // 生命周期 卸载
    clearInterval(this.timerID)
  }

  tick () {
    this.timer = resultFormat(this.todayStartTime - Date.parse(new Date()) / 1000)
    this.setState({
      date: this.timer
    })
  }

  // 获取当天6点的时间戳
  get18 () {
    const start = new Date()
    start.setHours(0)
    start.setMinutes(0)
    start.setSeconds(0)
    start.setMilliseconds(0)
    this.todayStartTime = Date.parse(start) / 1000 + 18 * 60 * 60
  }

  render () {
    return (
      <div className='clock-box'>
        <h1 className='clock-title'>现在是会倒计时的timer了,所以展示距离18点倒计时</h1>
        <h2 className='clock-timer'>It is {this.state.date ? this.state.date : '--'}</h2>
      </div>
    )
  }
}
export default Clock
