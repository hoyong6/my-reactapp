import React from 'react'
class FancyBorder extends React.Component { // 这个组件作为模板组件承担了担任模板的任务
  render () {
    return(
      <div>
        <div className={'FancyBorder FancyBorder-' + this.props.color}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default FancyBorder