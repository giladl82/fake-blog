import React from 'react'
import PropTypes from 'prop-types';

import './style.css';

const renderPages = ({ currentPage, numOfPagesToDispaly, totalPages }) => {  
  let pages = new Array(Math.min(numOfPagesToDispaly, totalPages));  
  if(currentPage === 1) {
    return pages.map()
  } else {

  }
}

const Pager = (props) => {
  return (
    <nav className='pager'>
      <ul>
        {renderPages(props)}
      </ul>
    </nav>
  )
}

Pager.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numOfPagesToDispaly: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
}

export default Pager;