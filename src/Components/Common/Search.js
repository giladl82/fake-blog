import React from 'react'
import PropTypes from 'prop-types'

export const Search = ( { className, value, onChange } ) => {
  return (
    <input type='search' className={className}
      onChange={onChange}
      placeholder='Enter text to search'
      value={value}
    />
  )
}

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search;