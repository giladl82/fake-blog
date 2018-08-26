import React from 'react'
import PropTypes from 'prop-types'

import { Select, Search } from '../Common'

import './style.css';

const perPageOptions = [ '5', '10', '20', '50' ]

const Filters = ( { displaying, searchBy, onSearchByChange, perPage, onPerPageChange } ) => {
  return (
    <div className='filters'>
      <Search className='filters-search' value={searchBy} onChange={onSearchByChange} />
      Number of {displaying}&nbsp;
      <Select
        className='filters-select'
        options={perPageOptions}
        onChange={onPerPageChange}
        value={perPage.toString()}
      />
      &nbsp;per page
    </div>
  )
}

Filters.propTypes = {
  displaing: PropTypes.string,
  searchBy: PropTypes.string.isRequired,
  onSearchByChange: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  onPerPageChange: PropTypes.func.isRequired
}

Filters.defaultProps = {
  displaying: 'posts'
}

export default Filters;