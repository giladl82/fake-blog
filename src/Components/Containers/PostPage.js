import React, { Component } from 'react';

import Loader from '../Loader';
import Post from '../Post';
import Comment from '../Comment';

import { getPost } from '../../Bll/posts';

import './style.css';

export class PostPage extends Component {
  state = {
    post: undefined,
  };

  handleGoBackClick = event => {
    event.preventDefault();
    if (this.props.location.state.from === window.location.host) {
      this.props.history.goBack();
    } else {
      this.props.history.push('/posts/1');
    }
  }

  componentDidMount () {
    getPost(this.props.match.params.id).then(post => {
      this.setState({ post });
    });
  }

  render () {
    const { post } = this.state;
    return (
      <div className='posts-container'>
        {!post ? <Loader /> : <React.Fragment>
          <Post data={post} />
          <h2>Comments:</h2>
          {post.comments.map(c => <Comment key={c.id} data={c} />)}
          <br />
          <a href='/' onClick={this.handleGoBackClick}>Go Back</a>
        </React.Fragment>}
      </div>
    );
  }
}

export default PostPage;
