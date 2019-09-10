import React from 'react'
import FancyBorder from './fancyBorder'
class Dialog extends React.Component { // 二级嵌套组件
  render () {
    return(
      <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {this.props.title}
      </h1>
      <p className="Dialog-message">
        {this.props.message}
      </p>
    </FancyBorder>
    )
  }
}
export default Dialog