import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const verifyPagerClickProps = (props, propName, componentName) => {
  if (!props.onClick && !props.urlPath) {
    return new Error(
      `You should supply with either urlPath or onClick event handler!`
    );
  }
};

const renderPages = ({ currentPage, numOfPagesToDisplay, totalPages, urlPath, onClick }) => {
  const pages = new Array(Math.min(numOfPagesToDisplay, totalPages));
  const middlePoint = parseInt(pages.length / 2, 10);

  for (let index = 0; index < pages.length; index++) {
    if (currentPage <= middlePoint) {
      pages[index] = index + 1;
    } else {
      pages[index] = index + currentPage - middlePoint;
    }
  }

  return pages.map(page => {
    if (page === currentPage) {
      return <span key={page} className='pager-current'>{page}</span>;
    }

    if (urlPath.endsWith('/')) {
      urlPath = urlPath.substring(0, urlPath.length - 1);
    }

    return (

      <Link key={page} to={`${urlPath}/${page}`} onClick={() => { onClick(page) }} className='pager-link'>
        {page}
      </Link>
    );
  });
};

const Pager = props => {
  return (
    <nav className='pager'>
      <ul>{renderPages(props)}</ul>
    </nav>
  );
};

Pager.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numOfPagesToDisplay: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  urlPath: verifyPagerClickProps,
  onClick: verifyPagerClickProps
};


export default Pager;
