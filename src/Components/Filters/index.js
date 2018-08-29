import React from 'react';
import PropTypes from 'prop-types';

import { Select, Search } from '../Common';
import { selectOptions, selectValueType } from '../../Bll/common';
import './style.css';

class Filters extends React.Component {
  handleSearchByChange = event => {
    const searchBy = event.target.value;
    const filters = { ...this.props.filters }
    this.props.onFiltersChange({ ...filters, searchBy });
  };

  handlePerPageChange = event => {
    const value = event.target.value;
    const perPage = this.props.perPageOptions.filter(p => p.value === value)[0] || this.perPageOptions[0];
    const filters = { ...this.props.filters }
    this.props.onFiltersChange({ ...filters, perPage: perPage.value });
  };

  handleUserChange = event => {
    const userId = event.target.value;
    const filters = { ...this.props.filters }
    this.props.onFiltersChange({ ...filters, userId });
  };

  render () {
    const { filters, usersOptions, perPageOptions } = this.props;
    return (
      <div className="filters">
        <Search className="filters-search" value={filters.searchBy} onChange={this.handleSearchByChange} />
        Show posts for
        <Select
          className="filters-select"
          options={usersOptions}
          onChange={this.handleUserChange}
          value={filters.userId}
        />
        Number of posts
        <Select
          className="filters-select"
          options={perPageOptions}
          onChange={this.handlePerPageChange}
          value={filters.perPage}
        />
        per page
      </div>
    );
  }
}

Filters.propTypes = {
  filters: PropTypes.shape({
    searchBy: PropTypes.string.isRequired,
    userId: selectValueType,
    perPage: selectValueType
  }).isRequired,
  onFiltersChange: PropTypes.func.isRequired,
  perPageOptions: selectOptions,
  usersOptions: selectOptions
};


export default Filters;
