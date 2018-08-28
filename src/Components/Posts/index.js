import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Post from './Post';

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map(post => <Post data={post} />)}
    </div>
  )
}

Posts.propTypes=  {
  posts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
}

export default Posts;