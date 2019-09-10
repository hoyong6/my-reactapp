import React from 'react'
class BoilingVerdict extends React.Component {
  render () {
    let str = ''
    if (this.props.celsius >= 100) {
      str = `<p>The water would boil.</p>`
     } else {
      str = `<p>The water would not boil.</p>`
     }
    return (
      <div>
        {str}
      </div>
    )
  }
}
export default BoilingVerdict
