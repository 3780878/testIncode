import React, { Component } from "react";
import { connect } from "react-redux";
import { handleRegistration } from '../../actions/auth.action';
import AuthForm from '../../components/AuthForm'

class Registration extends Component {
state = {
  login: '',
  password: ''
}
constructor(props) {
  super(props);
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}
onChange = event => {
  this.setState(event)
}

onSubmit (e) {
  e.preventDefault();
  this.props.handleRegistration({login:this.state.login, password:this.state.password})
}
navigateHome = () => {
  this.props.history.go('/')
}
render(){
  return (
    <AuthForm
        login={this.state.login}
        password={this.state.password}
        isValid={this.props.isValid}
        hasChanges={this.props.hasChanges}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
				onClick={this.navigateHome}/> 
    )
    }
  }
const mapStateToProps = state => ({
  user: state.user,
  isValid: state.isValid,
  isSubmitting: state.isSubmitting
})

const mapDispatchToProps = {
  handleRegistration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)