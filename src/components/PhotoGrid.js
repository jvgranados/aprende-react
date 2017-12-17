import React from 'react'
import Photo from './Photo'

const PhotoGrid = props => (
  <div className='photo-grid'>
    {
      props.posts.map((post, i) => <Photo key={post.id} post={post} i={i} {...props} />)
    }
  </div>
)

export default PhotoGrid
