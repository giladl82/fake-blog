import React from 'react'
import PropTypes from 'prop-types'
import { selectOptions, selectValueType } from '../../Bll/common';

export const Select = ({ className, options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className={className}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  options: selectOptions,
  value: selectValueType,
  onChange: PropTypes.func.isRequired
}

export default Select;