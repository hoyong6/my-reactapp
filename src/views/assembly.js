import React from 'react'
import FancyBorder from '../components/fancyBorder'
import Dialog from '../components/dialog'
class Assembly extends React.Component { // 这个组件训练组价嵌套
  render () {    
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
export default Assembly