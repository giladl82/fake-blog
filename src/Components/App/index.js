import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from '../Header';
import PostsPage from '../Containers/PostsPage';

import './style.css';

import { getPosts } from '../../Bll/posts';

class App extends Component {
  render () {
    return (
      <div className="app">
        <Header />
        <div className="app-intro">
          <Router>
            <React.Fragment>
              <Route exact path="/" component={() => {
                return <Redirect
                  to={{
                    pathname: "/posts/1"
                  }}
                />
              }} />
              <Route path="/posts/:page" component={PostsPage} />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
