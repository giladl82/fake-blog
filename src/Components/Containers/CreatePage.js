import React, { Component } from 'react';

import { redirectToPrevPage } from '../../Bll/common';

import './style.css';

export class CreatePage extends Component {
  state = {}

  handleInputChange = event => {
    const { target } = event;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleCancelClick = event => {
    event.preventDefault();

    const { location, history } = this.props;
    redirectToPrevPage(location, history);
  }

  handleCreateSubmit = event => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      this.setState({ messageType: 'ok', message: 'Post was submitted successfully' });

      setTimeout(() => {
        this.props.history.push('/posts/1');
      }, 2500);
    } else {
      const missingInput = Array.from(event.target.elements).find(el => !el.value);
      if (missingInput) {
        this.setState({ messageType: 'error', message: <div><span>{missingInput.name}</span> is required!</div> });
      }

    }
  }

  componentDidMount () {
  }

  render () {
    const { message, messageType } = this.state;
    return (
      <React.Fragment>
        <h1>Create a new post:</h1>
        <form onSubmit={this.handleCreateSubmit} className='create-form' noValidate={true}>
          <label className='form-line'>
            <span>Author:</span>
            <input className='form-input' name='author' onChange={this.handleInputChange} required />
          </label>
          <label className='form-line'>
            <span>Title:</span>
            <input className='form-input' name='title' onChange={this.handleInputChange} required />
          </label>
          <label className='form-line'>
            <span>Body:</span>
            <textarea className='form-input' rows={10} name='body' onChange={this.handleInputChange} required />
          </label>
          <div className='form-buttons'>
            <a className='form-cancel' href='/' onClick={this.handleCancelClick}>Cancel</a>
            <input className='form-submit' type='submit' value='Save' />
          </div>
          {message && <div className={`form-submit-message form-submit-message-${messageType}`}>{message}</div>}
        </form>
      </React.Fragment >
    )
  }
}

export default CreatePage;
