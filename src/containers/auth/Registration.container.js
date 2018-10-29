import React, { Component } from "react";
import { connect } from "react-redux";
import { handleRegistration } from '../../actions/auth.action';
import AuthForm from '../../components/AuthForm'

class Registration extends Component {
state = {
  name: '',
  password: ''
}

onChange = event => {
  this.setState(event)
}

onSubmit = () => {
  this.props.handleRegistration({name:this.state.name, password:this.state.password})
}

render(){
  return (
    <AuthForm
        login={this.state.login}
        password={this.state.password}
        isValid={this.props.isValid}
        hasChanges={this.props.hasChanges}
        onChange={this.onChange}
        onSubmit={this.onSubmit}/> 
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