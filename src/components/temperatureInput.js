import React from 'react'
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class TemperatureInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { temperature: '' }
    this.canvas = React.createRef()
  }

  handleChange (e) {
    this.props.onTemperatureChange(e.target.value) // 反向回调，回调到父级查函数
  }

  render () {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input
            value={temperature}
            onChange={this.handleChange}
          />
        </fieldset>
      </div>
    )
  }
}
export default TemperatureInput
