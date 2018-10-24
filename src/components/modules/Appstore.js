/*import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { handleLogin } from '../../actions/loginAction';

class App extends Component {
state = {
  name: '',
  password: ''
}
onChange = event => {
  this.setState({ name: event.target.value })
}
onChangePassword = event => {
  this.setState({ password: event.target.value })
}
onSubmit = () => {
  this.props.handleLogin({name:this.state.name, password:this.state.password})
}
validate = () => {
  const { name, password } = this.state
  if (name.trim() && password.trim() && name.length>2 && password.length>2) {
    return true
  }
  return false
}
render(){
  return (
    <div>
      
    </div>
      )
    }
  }
const mapStateToProps = state => ({
  user: state.user,
  isValid: state.isValid,
  isSubmitting: state.isSubmitting
})

const mapDispatchToProps = {
  handleLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)*/