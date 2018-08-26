import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ className, value, onChange, dataList }) => {
  return (
    <React.Fragment>
      <input
        type="search"
        className={className}
        onChange={onChange}
        placeholder="Enter text to search"
        value={value}
        list="dataList"
      />
      {dataList &&
        dataList.length && (
          <datalist id="dataList">
            {dataList.map(item => (
              <option key={item.id} value={item.value} />
            ))}
          </datalist>
        )}
    </React.Fragment>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
};

export default Search;
