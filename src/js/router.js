'use strict'
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Home from './components/home.jsx';
import { history } from './containers/store';

@connect(mapStateToProps, mapDispatchToProps)
export default class Router extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Home />
      </ConnectedRouter> 
    )
  }
}

function mapStateToProps({ user }) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
