import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Comment = ({ data }) => {
  return (
    <div className='comment'>
      <div className='comment-body'>{data.body}</div>
      <div className='comment-name'><i>By: {data.name}</i></div>
    </div>
  )
}

Comment.propTypes=  {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
}

export default Comment;