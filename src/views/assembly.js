import React from 'react'
import FancyBorder from '../components/fancyBorder'
import Dialog from '../components/dialog'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { addItem, submitInput } from '../actions'


class Assembly extends React.Component { // 这个组件训练组价嵌套
  addTodo() {
    this.props.addItem()
    console.log('查看当前输出的props--->', this.props)
  }
  submitInput(value) {
    this.props.submitInput(value)
  }
  render () {
    return(
      <div>
        <p>{this.props.list.addNums.list}</p>
        <input type = "button" value = "点击按钮" onClick = {() => {this.addTodo()}}/>
        <input type = "text" placeholder = '输入信息提交会直接给到状态树' onKeyDown={(e) => {
            if (e.keyCode === 13){
              let title = e.target.value
              if (title.length) {
                this.submitInput(title)
              } 
            }
          }}/>
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

function mapDispatchToProps(dispatch) { // 拿到提交方法
  return {
    addItem: bindActionCreators(addItem, dispatch),
    submitInput: bindActionCreators(submitInput, dispatch)
  }
}


function mapStateToProps(state) {
  return {
    // list: state.addNums.num  // 会返回这个函数名的对象
    list: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assembly)
