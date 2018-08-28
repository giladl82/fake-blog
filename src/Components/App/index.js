import React, { Component } from 'react';
import Header from '../Header';
import Filters from '../Filters';
import Pager from '../Pager';
// import Table from '../Table';

import './style.css';

class App extends Component {
  perPageOptions = [{ value: '5', text: '5' }, { value: '10', text: '10' }, { value: '20', text: '20' }, { value: '50', text: '50' }];

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

  render () {
    return (
      <div className="app">
        <Header />
        <div className="app-intro">
          <Filters
            onFiltersChange={this.handleFiltersChange}
            perPageOptions={this.perPageOptions}
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
