import React from 'react'
function withControlledState (WrappedComponet) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        value: ''
      }
      this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange (event) {
      console.log(event.target.value)
      this.setState({
        value: event.target.value
      })
    }

    render () {
      // newProps保存受控组件需要使用的属性和事件处理函数
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      }
      return <WrappedComponet {...this.props} {...newProps} />
    }
  }
}
class SimpleControlledComponent extends React.Component {
  render () {
    // 此时的 SimpleControlledComponent 为无状态组件，状态由高阶组件维护
    console.log({ ...this.props.controlledProps })
    return <input name='simple' type='text' {...this.props.controlledProps} />
  }
}
const ComponentWithControlledState = withControlledState(SimpleControlledComponent)
export default ComponentWithControlledState
