import React from 'react';
import PropTypes from 'prop-types';

import { Select, Search } from '../Common';

import './style.css';

import { fetchUsers } from '../../Bll/users';

class Filters extends React.Component {
  perPageOptions = [{ value: '5', text: '5' }, { value: '10', text: '10' }, { value: '20', text: '20' }, { value: '50', text: '50' }];

  state = {
    filters: {
      searchBy: '',
      userId: '',
      perPage: this.perPageOptions[0]
    },
    users: []
  };

  handleSearchByChange = event => {
    const searchBy = event.target.value;
    this.setState(
      prevState => {
        return {
          filters: { ...prevState.filters, searchBy }
        };
      },
      () => {
        this.props.onFiltersChange(this.state.filters);
      }
    );
  };

  handlePerPageChange = event => {
    const value = event.target.value;
    const perPage = this.perPageOptions.filter(p => p.value === value)[0] || this.perPageOptions[0];

    this.setState(
      prevState => ({
        filters: { ...prevState.filters, perPage }
      }),
      () => {
        this.props.onFiltersChange(this.state.filters);
      }
    );
  };

  componentDidMount () {
    fetchUsers().then(data => {
      const users = data.map(user => ({
        value: user.id.toString(),
        text: user.name
      }));

      users.unshift({ value: '', text: 'All users' })

      this.setState({ users });
    });
  }

  render () {
    const { displaying } = this.props;
    const { filters, users } = this.state;
    return (
      <div className="filters">
        <Search
          className="filters-search"
          value={filters.searchBy}
          dataList={users}
          onChange={this.handleSearchByChange}
        />

        Show {displaying} for

        <Select
          className="filters-select"
          options={this.state.users}
          onChange={this.handlePerPageChange}
          value={filters.userId}
        />

        Number of {displaying}

        <Select
          className="filters-select"
          options={this.perPageOptions}
          onChange={this.handlePerPageChange}
          value={filters.perPage.value}
        />
        per page
      </div>
    );
  }
}

Filters.propTypes = {
  displaying: PropTypes.string,
  onFiltersChange: PropTypes.func.isRequired
};

Filters.defaultProps = {
  displaying: 'posts'
};

export default Filters;
