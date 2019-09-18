import React from 'react'
import FancyBorder from '../components/fancyBorder'
import Dialog from '../components/dialog'
import {connect} from 'react-redux'

class Assembly extends React.Component { // 这个组件训练组价嵌套
  render () {
    const {list} = this.props
    console.log({list}) 
    return(
      <div>
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            Welcome!!!!
          </h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!!!!
          </p>
        </FancyBorder>
        <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    list: state
  }
}

export default connect(mapStateToProps)(Assembly)
