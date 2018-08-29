import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

import Post from '../Post';

const PostsList = ({ posts }) => {
  return (
    <div className='posts'>
      {posts.map(post => (<div className='posts-instance' key={post.id}>
        <Post data={post} />
        <Link className='post-link' to={{ pathname: `/post/${post.id}`, state: { from: window.location.host } }} > Read More</Link>
      </div>))}
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
}

export default PostsList;