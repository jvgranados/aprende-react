import React, { Component } from 'react'

class Mention extends Component{
  render = () => {
    const text = this.props.text

    const link = this.props.hashtag ?
      (<a target='blank' href={`https://www.instagram.com/explore/tags/${text}`}>#{text}</a>) :
      (<a target='blank' href={`https://www.instagram.com/${text}`}>@{text}</a>)

    return link;
  }
}

export default Mention
