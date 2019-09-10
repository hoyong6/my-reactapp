import React from 'react'
import BtnClick from '../components/btnclick.js'
import Clock from '../components/clock.js'
import Calculator from '../components/calculator.js'
class Index extends React.Component { // 参照文档写一个点赞按钮，想到哪写到哪把没用规则
  render () {    
    return(
      <div>
        这个是主页部分
        <BtnClick 
        wordings = {{likedText: '已赞', unlikedText: '赞'}}
        onClick = {() => console.log('Click on like button!')}
        />
        <Clock/>
        <Calculator/>
      </div>
    )
  }
}
export default Index
