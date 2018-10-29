import React from 'react';
import './App.css';
import Router from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { withRouter } from 'react-router-dom';

import { getUser, logout } from './actions/root.action';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this)
  }

  componentDidMount(){
    this.props.getUser();
  }

  onLogout() {
    this.props.logout();
  }

  render() {
    return (        
      <div className="app-container container">
          <Header isLoggedIn={this.props.loggedIn} onLogout={this.onLogout}/>
          <Router/>
          <Footer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.root.loggedIn,
  loaded: state.root.loaded
})

const mapDispatchToProps = {
  getUser,
  logout
};

export default  withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(App),
);