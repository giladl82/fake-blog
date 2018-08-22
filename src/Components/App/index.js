import React, { Component } from 'react';

import Header from '../Header';
import Filters from '../Filters';
// import Table from '../Table';

import './style.css';

import { fetachFriends } from '../../Bll/users';

class App extends Component {
  state = {
    searchBy: '',
    perPage: 10,
    pageNumber: 1,
    totalPage: undefined,
    totalFriends: undefined,
    friends: undefined
  }

  handlePerPageChange = event => {
    const perPage = parseInt( event.target.value, 10 );

    this.setState( { perPage }, () => {
      const { perPage, pageNumber } = this.state;
      fetachFriends( perPage, pageNumber )
        .then( friends => { this.setState( friends ) } )
    } );
  }

  handleSearchByChange = event => {
    const searchBy = event.target.value;
    this.setState( { searchBy } );
  }

  render () {
    return (
      <div className="App">
        <Header />          
        <div className="App-intro">
          <Filters
            searchBy={this.state.searchBy}
            onSearchByChange={this.handleSearchByChange}
            perPage={this.state.perPage}
            onPerPageChange={this.handlePerPageChange} />
        </div>
      </div>
    );
  }
}

export default App;
