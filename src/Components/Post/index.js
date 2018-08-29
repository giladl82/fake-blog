import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Post = ({ data }) => {
  return (
    <div className='post'>
      <h2 className='post-title'>{data.title}</h2>
      {data.userName && <div className='post-creator'>By: {data.userName}</div>}
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