import React, { Component } from 'react';
import Header from '../Header';
import Filters from '../Filters';
import Pager from '../Pager';
import Posts from '../Posts';

import './style.css';

import { getPosts } from '../../Bll/posts';

class App extends Component {
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
    pageNumber: 1,
    totalPage: undefined,
    totalFriends: undefined,
    friends: undefined
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

  componentDidMount() {
    const { perPage, searchBy, userId } = this.defaultFilters;
    getPosts(1, perPage, searchBy, userId).then(posts => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-intro">
          <Filters
            onFiltersChange={this.handleFiltersChange}
            perPageOptions={this.perPageOptions}
            userIdDefaultValue={this.defaultFilters.userId}
            perPageDefaultValue={this.defaultFilters.perPage}
          />
        </div>
        <Posts posts={this.state.posts} />
        <Pager urlPath="/" currentPage={6} numOfPagesToDisplay={5} totalPages={25} />
      </div>
    );
  }
}

export default App;
