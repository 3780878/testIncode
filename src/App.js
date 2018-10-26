import React from 'react';
import './App.css';
import Router from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { withRouter } from 'react-router-dom';

import { getUser } from './actions/root.action';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount(){
      this.props.getUser();
  }

  render() {
    return (        
      <div className="app-container container">
          <Header isLoggedIn={this.props.loggedIn}/>
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
  getUser
};

export default  withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(App),
);