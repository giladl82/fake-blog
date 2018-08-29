import React, { Component } from 'react';

import './style.css';

export class CreatePage extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <React.Fragment>
        <h1>Create a new post:</h1>
        <form onSubmit={this.handleCreateSubmit} className='create-form'>
          <label className='form-line'>
            <span>Author:</span>
            <input className='form-input' ref={author => this.author} required />
          </label>
          <label className='form-line'>
            <span>Title:</span>
            <input className='form-input' ref={title => this.title} required />
          </label>
          <label className='form-line'>
            <span>Body:</span>
            <textarea className='form-input' rows={10} ref={body => this.body} required />
          </label>
          <div className='form-buttons'>
            <a className='form-cancel' href='/'>Cancel</a>
            <input className='form-submit' type='submit' value='Save' />
          </div>
        </form>
      </React.Fragment >
    )
  }
}

export default CreatePage;
