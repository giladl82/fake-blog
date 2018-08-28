import React from 'react';
import PropTypes from 'prop-types';

import { Select, Search } from '../Common';

import './style.css';

import { getUsers } from '../../Bll/users';

class Filters extends React.Component {
  state = {
    filters: {
      searchBy: '',
      userId: this.props.userIdDefaultValue || '0',
      perPage: this.props.perPageDefaultValue || '0'
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
    const perPage = this.props.perPageOptions.filter(p => p.value === value)[0] || this.perPageOptions[0];

    this.setState(
      prevState => ({
        filters: { ...prevState.filters, perPage: perPage.value }
      }),
      () => {
        this.props.onFiltersChange(this.state.filters);
      }
    );
  };

  handleUserChange = event => {
    const userId = event.target.value;
    this.setState(
      prevState => ({
        filters: { ...prevState.filters, userId }
      }),
      () => {
        this.props.onFiltersChange(this.state.filters);
      }
    );
  };

  componentDidMount() {
    getUsers().then(data => {
      const users = data.map(user => ({
        value: user.id.toString(),
        text: user.name
      }));

      users.unshift({ value: '', text: 'All users' });

      this.setState({ users });
    });
  }

  render() {
    const { displaying } = this.props;
    const { filters } = this.state;
    return (
      <div className="filters">
        <Search className="filters-search" value={filters.searchBy} onChange={this.handleSearchByChange} />
        Show {displaying} for
        <Select
          className="filters-select"
          options={this.state.users}
          onChange={this.handleUserChange}
          value={filters.userId}
        />
        Number of {displaying}
        <Select
          className="filters-select"
          options={this.props.perPageOptions}
          onChange={this.handlePerPageChange}
          value={filters.perPage}
        />
        per page
      </div>
    );
  }
}

Filters.propTypes = {
  displaying: PropTypes.string,
  onFiltersChange: PropTypes.func.isRequired,
  perPageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  perPageDefaultValue: PropTypes.string,
  userIdDefaultValue: PropTypes.string
};

Filters.defaultProps = {
  displaying: 'posts'
};

export default Filters;
