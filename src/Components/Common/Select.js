import React from 'react'
import PropTypes from 'prop-types'

export const Select = ( { className, options, value, onChange } ) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map( option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ) )}
    </select>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
   ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Select;