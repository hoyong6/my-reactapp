// 持久化数据组件 高阶组件(react 高级组件的作用 ？本质是什么来的 ？)
import React from 'react'
function withPersistentData (WrappedCompoent) {
  return class extends React.Component {
    componentWillMount () {
      console.log('这只是一个测试高阶组件的例子')
      const data = '这是一波高阶组件'
      this.setState({ data })
    }

    render () {
      // 通过{ ...this.props} 把传递给当前组件属性继续传递给被包装的组件
      return <WrappedCompoent data={this.state.data} {...this.props} />
    }
  }
}
// 我甚至可以在一个JS里，写俩个封装的类
class MyComponent extends React.Component {
  render () {
    return <p>{this.props.data}</p>
  }
}
// 关于新的类的调用
const MyComponentWithPersistentData = withPersistentData(MyComponent)
export default MyComponentWithPersistentData
