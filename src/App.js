import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import { selectCurrentUser } from './redux/user/user.selectors'

import './App.css'

class App extends Component {
  unsubscribeFromAuth = null

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)} />
      </Switch>
      </div>
    );
  }
}

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, null)(App);
