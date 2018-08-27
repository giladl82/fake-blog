import React from 'react';
import PropTypes from 'prop-types';

import { Select, Search } from '../Common';

import './style.css';

import { fetchUsers } from '../../Bll/users';

class Filters extends React.Component {
  perPageOptions = ['5', '10', '20', '50'];

  state = {
    filters: {
      searchBy: '',
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
    const perPage = event.target.value;
    this.setState(
      prevState => ({
        filters: { ...prevState.filters, perPage }
      }),
      () => {
        this.props.onFiltersChange(this.state.filters);
      }
    );
  };

  componentDidMount() {
    fetchUsers().then(data => {
      const users = data.map(user => ({
        id: user.id.toString(),
        value: user.name
      }));
      this.setState({ users });
    });
  }

  render() {
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
        Number of {displaying}
        &nbsp;
        <Select
          className="filters-select"
          options={this.perPageOptions}
          onChange={this.handlePerPageChange}
          value={filters.perPage}
        />
        &nbsp;per page
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
