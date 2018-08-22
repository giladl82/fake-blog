import React from 'react'
import PropTypes from 'prop-types'

export const Search = ( { value, onChange } ) => {
  return (
    <input type='search' className='Search'
      onChange={onChange}
      placeholder='Enter text to search'
      value={value}
    />
  )
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search;