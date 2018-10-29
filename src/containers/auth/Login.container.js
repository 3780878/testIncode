import React, { Component } from "react";
import { connect } from "react-redux";
import { handleLogin } from '../../actions/auth.action';
import AuthForm from '../../components/AuthForm';

class Login extends Component {
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
  onSubmit(e) {
    e.preventDefault();
    this.props.handleLogin({ login:this.state.login, password:this.state.password})
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
  user: state.root.user,
  hasChanges: state.login.hasChanges,
  isValid: state.login.isValid,
  isSubmitting: state.login.isSubmitting
})

const mapDispatchToProps = {
  handleLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)