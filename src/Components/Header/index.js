import React from 'react'

import './style.css';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header-title'>Demo Blog</h1>
      <p className='header-p'>
        This app loads 100 fake Posts <br/>
        You can select any of them to get fake comments <br/>
        Yau can also start typing a user name in order to filter posts / comments by user <br/>
        All posts and comments are resulted by <a className='header-p-link' href='jsonplaceholder.typicode.com'>jsonplaceholder.typicode.com</a>
      </p>
    </div>
  )
}

export default Header;