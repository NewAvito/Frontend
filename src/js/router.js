'use strict'
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Spin } from 'antd';

import Home from './components/home.jsx';
import AddItemForm from './components/add-item.jsx';
import LoginForm from './components/login-form.jsx';
import RegisterForm from './components/register-form.jsx';
import CardPicture from './components/cardPicture.jsx';
import { checkLogged } from './actions/userActions';
import { history } from './containers/store';

@connect(mapStateToProps, mapDispatchToProps)
export default class Router extends Component {
  componentDidMount() {
    this.props.checkLogged();
  }

  render() {
    if (this.props.loading) {
      return (
        <Spin className='loading-spin' size='large' />
      )
    }

    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddItemForm} />
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/item' component={CardPicture} />
        </Switch>
      </ConnectedRouter> 
    )
  }
}

function mapStateToProps({ user }) {
  return {
    loading: user.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkLogged: () => {
      dispatch(checkLogged());
    }
  }
}
