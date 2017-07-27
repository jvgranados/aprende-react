import React, { Component } from 'react'
import replace from 'react-string-replace'

import CommentForm from './CommentForm'
import Mention from './Mention'

class Comments extends Component {
  state = { showComments: true }

  toggleComments = () => this.setState(({ showComments }) =>
    ({ showComments: !showComments }))

  renderComment = ({ from: { full_name: name }, text }, i) => {
    let replacedText = null

    //match @-mentions
    replacedText = replace(text, /@(\w+)/g, (match, i) => (
      <Mention key={match + i} text={match} />
    ))

    //match hashtags
    replacedText = replace(replacedText, /#(\w+)/g, (match, i) => (
      <Mention key={match + i} text={match} hashtag={true}/>
    ))

    return (
      <div className='comment' key={i}>
        <p>
          <strong>
            <a key={name} target='blank' href={`https://www.instagram.com/${name}`}>{name}</a>
          </strong>
          {replacedText}
          <button
            onClick={() => this.props.removeComment(this.props.params.postId, i)}
            className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }

  render = () => (
    <div className='comments'>
      {this.state.showComments && (<div className='comments-list'>
        {this.props.postComments.map(this.renderComment.bind(this))}
        <CommentForm {...this.props} />
      </div>)}
      <div className='control-buttons'>
        <button onClick={this.toggleComments}>
          {this.state.showComments ? 'Hide' : 'Show'} comments
        </button>
      </div>
    </div>
  )
}

export default Comments
