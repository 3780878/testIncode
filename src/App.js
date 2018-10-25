import React from 'react';
import './App.css';
import Router from "./Router";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import { withRouter } from 'react-router-dom';

import { getUser } from './actions/AppAction';
import { connect } from 'react-redux';

class App extends React.Component {
    componentDidMount(){
        this.props.getUser();
    }
    render() {
      return (        
        <div className="app-container container">
            <div style={{height: 20}}>Logged In: {this.props.loggedIn.toString()}</div>
            <div style={{height: 20}}>Loaded: {this.props.loaded.toString()}</div>
            <Header/>
            <Router/>
            <Footer/>
        </div>
    )
    }
  }

const mapStateToProps = state => ({
    loggedIn: state.app.loggedIn,
    loaded:   state.app.loaded
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