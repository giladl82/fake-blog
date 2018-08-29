import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Loader from '../Loader';
import Filters from '../Filters';
import Pager from '../Pager';
import PostsList from '../PostsList';

import { getUsers } from '../../Bll/users';
import { getPosts } from '../../Bll/posts';

import './style.css';

const DEFAULT_POSTS_PER_PAGE = 5;

export class PostsPage extends Component {
  perPageOptions = [
    { value: '5', text: '5' },
    { value: '10', text: '10' },
    { value: '20', text: '20' },
    { value: '50', text: '50' }
  ];

  state = {
    users: [],
    posts: [],
    totalPostsCount: 0,
    pageNumber: 1,
    filters: {
      searchBy: '',
      userId: '',
      perPage: DEFAULT_POSTS_PER_PAGE
    }
  };

  debounce;

  getPosts = (pageNumber = this.props.match.params.page) => {
    getPosts(pageNumber, this.state.filters).then(posts => {
      this.setState({ ...posts });
    });
  }

  handleFiltersChange = filters => {
    clearTimeout(this.debounce);
    this.setState({ filters }, () => {
      this.debounce = setTimeout(() => {
        this.props.history.push('/posts/1');
        this.getPosts();
      }, 500);
    });
  };

  handlePagerLinkClick = pageNumber => {
    this.getPosts(pageNumber)
  }

  componentDidMount () {
    getUsers().then(data => {
      const users = data.map(user => ({
        value: user.id.toString(),
        text: user.name
      }));
      users.unshift({ value: '', text: 'All users' });
      this.setState({ users });
      this.getPosts();
    });
  }

  render () {
    const { totalPostsCount, filters, users } = this.state;
    const currentPage = parseInt(this.props.match.params.page, 10) || 1;
    const totalPages = Math.ceil(totalPostsCount / filters.perPage);

    return (
      <div className='posts-container'>
        {!this.state.posts.length ? <Loader /> : <React.Fragment>
          <div className='posts-header'>
            <Filters
              filters={filters}
              onFiltersChange={this.handleFiltersChange}
              perPageOptions={this.perPageOptions}
              usersOptions={users}
            />
            <Link className='posts-create-button' to='/create'>Create a new Post</Link>
          </div>
          <PostsList posts={this.state.posts} />
          <Pager urlPath='/posts' currentPage={currentPage} numOfPagesToDisplay={5} totalPages={totalPages} onClick={this.handlePagerLinkClick} />
        </React.Fragment>}
      </div>
    );
  }
}

export default PostsPage;
