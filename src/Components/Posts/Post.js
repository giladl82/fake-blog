import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ data }) => {
  return (
    <div className='post'>
      <h2 className='post-title'>{data.title}</h2>
      <div className='post-creator'>{data.userName}</div>
      <div className='post-summary'>{data.body}</div>
    </div>
  )
}

Post.propTypes=  {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Post;