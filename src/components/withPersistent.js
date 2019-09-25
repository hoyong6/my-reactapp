// 持久化数据组件 高阶组件(react 高级组件的作用 ？本质是什么来的 ？)
import React from 'react'
function withPersistentData (WrappedCompoent) {
  return class extends React.Component {
    componentWillMount () {
      const data = '这是一波高阶组件'
      this.setState({ data })
      console.log('组件被调用了嘛')
      this.someMethod = this.someMethod.bind(this)
    }

    componentDidMount () { // 当组件解析完毕之后
      this.someMethod()
    }

    someMethod () {
      this.wrappedInstance.comeMethodInWrappedComponent()
      console.log('查看输出的这个对象是什么--->', this.wrappedInstance)
    }

    render () {
      // 通过{ ...this.props} 把传递给当前组件属性继续传递给被包装的组件
      return <WrappedCompoent ref={(instance) => { this.wrappedInstance = instance }} data={this.state.data} {...this.props} />
    }
  }
}
// 我甚至可以在一个JS里，写俩个封装的类
class MyComponent extends React.Component {
  comeMethodInWrappedComponent () {
    console.log('无状态组件回调父组件')
    setTimeout(() => {
      console.log('无状态组件回调父组件')
    }, 1000)
  }

  render () {
    return <p>{this.props.data}</p>
  }
}
// 关于新的类的调用
const MyComponentWithPersistentData = withPersistentData(MyComponent)
export default MyComponentWithPersistentData
