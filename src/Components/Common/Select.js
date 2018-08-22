import React from 'react'
import PropTypes from 'prop-types'

export const Select = ( { options, value, onChange } ) => {
  return (
    <select value={value} onChange={onChange} className='Select'>
      {options.map( option => (
        <option key={option} value={option}>
          {option}
        </option>
      ) )}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf( PropTypes.string ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Select;