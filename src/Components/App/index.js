import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from '../Header';

import { PostsPage, PostPage } from '../Containers';


import './style.css';

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
              <Route path="/post/:id" component={PostPage} />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
