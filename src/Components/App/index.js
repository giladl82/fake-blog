import React, { Component } from 'react';
import Header from '../Header';
import Filters from '../Filters';
import Pager from '../Pager';
// import Table from '../Table';

import './style.css';

class App extends Component {
  state = {
    searchBy: '',
    pageNumber: 1,
    totalPage: undefined,
    totalFriends: undefined,
    friends: undefined
  };

  debounce;

  handleFiltersChange = filters => {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      console.log(filters);
    }, 500);
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-intro">
          <Filters
            searchBy={this.state.searchBy}
            onFiltersChange={this.handleFiltersChange}
            perPage={this.state.perPage}
          />
        </div>
        <Pager
          urlPath="/"
          currentPage={6}
          numOfPagesToDisplay={5}
          totalPages={25}
        />
      </div>
    );
  }
}

export default App;
