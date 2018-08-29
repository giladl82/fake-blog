import React, { Component } from 'react';

import Filters from '../Filters';
import Pager from '../Pager';
import Posts from '../Posts';

import { getUsers } from '../../Bll/users';
import { getPosts } from '../../Bll/posts';

const DEFAULT_POSTS_PER_PAGE = 5;

class PostsPage extends Component {
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
    console.log(pageNumber)
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
      this.handleFiltersChange(this.state.filters)
    });
  }

  render () {
    const { totalPostsCount, filters, users } = this.state;
    const currentPage = parseInt(this.props.match.params.page, 10) || 1;
    const totalPages = Math.ceil(totalPostsCount / filters.perPage);

    return (
      <React.Fragment>
        <Filters
          filters={filters}
          onFiltersChange={this.handleFiltersChange}
          perPageOptions={this.perPageOptions}
          usersOptions={users}
        />
        <Posts posts={this.state.posts} />
        <Pager urlPath='/posts' currentPage={currentPage} numOfPagesToDisplay={5} totalPages={totalPages} onClick={this.handlePagerLinkClick} />
      </React.Fragment>
    );
  }
}

export default PostsPage;
