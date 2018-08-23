import React from 'react'
import PropTypes from 'prop-types'

import { Select, Search } from '../Common'

import './style.css';

const perPageOptions = [ '5', '10', '20', '50' ]

const Filters = ( { searchBy, onSearchByChange, perPage, onPerPageChange } ) => {
  return (
    <div className='filters'>
      <Search className='filters-search' value={searchBy} onChange={onSearchByChange} />

      <Select
        className='filters-select'
        options={perPageOptions}
        onChange={onPerPageChange}
        value={perPage.toString()}
      />
    </div>
  )
}

Filters.propTypes = {
  searchBy: PropTypes.string.isRequired,
  onSearchByChange: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  onPerPageChange: PropTypes.func.isRequired
}

export default Filters;