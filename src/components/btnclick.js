import React from 'react'
class BtnClick extends React.Component { // 参照文档写一个点赞按钮，想到哪写到哪把没用规则
  constructor () {
    super()
    this.state = { isLiked: false}
  }
  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render(){
    const likedText = this.props.wordings.likedText || '取消'
    const unlikedText = this.props.wordings.unlikedText || '点赞'
    return(
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? likedText: unlikedText}
      </button>
    )
  }
}
export default BtnClick