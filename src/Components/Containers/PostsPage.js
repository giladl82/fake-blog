import React, { Component } from 'react';
import Filters from '../Filters';
import Pager from '../Pager';
import Posts from '../Posts';

import { getPosts } from '../../Bll/posts';

class PostsPage extends Component {
  perPageOptions = [
    { value: '5', text: '5' },
    { value: '10', text: '10' },
    { value: '20', text: '20' },
    { value: '50', text: '50' }
  ];

  defaultFilters = {
    searchBy: '',
    userId: '',
    perPage: '10'
  };

  state = {
    posts: [],
    pageNumber: 1
  };

  debounce;

  handleFiltersChange = filters => {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      const { perPage, searchBy, userId } = filters;
      getPosts(1, perPage, searchBy, userId).then(posts => {
        this.setState({ posts });
      });
    }, 500);
  };

  componentDidMount () {
    const { perPage, searchBy, userId } = this.defaultFilters;
    getPosts(1, perPage, searchBy, userId).then(posts => {
      this.setState({ posts });
    });
  }

  render () {
    const currentPage = parseInt(this.props.match.params.page, 10) || 1;
    return (
      <React.Fragment>
        <Filters
          onFiltersChange={this.handleFiltersChange}
          perPageOptions={this.perPageOptions}
          userIdDefaultValue={this.defaultFilters.userId}
          perPageDefaultValue={this.defaultFilters.perPage}
        />
        <Posts posts={this.state.posts} />
        <Pager urlPath='/posts' currentPage={currentPage} numOfPagesToDisplay={5} totalPages={25} />
      </React.Fragment>
    );
  }
}

export default PostsPage;
