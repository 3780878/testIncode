import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { handleLogin } from '../../actions/loginAction';
import Grid from '@material-ui/core/Grid';

class Login extends Component {
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
    <div container="true">
      <form autoComplete="off" className="dflexForm" spacing={2}>
        <Grid><TextField className="textfields namelogin"
        id="outlined-name"
        label="Name"        
        value={this.state.name}
        onChange={this.onChange}
        xs={6}
        variant="outlined"/> </Grid>   
        <Grid><TextField className="textfields"
        xs={6}
        id="outlined-password-input"
        label="Password"        
        type="password"
        onChange={this.onChangePassword}
        autoComplete="current-password"
        margin="normal"
        variant="outlined"/></Grid>
      </form>
      <Button  size="large"  className="buttonSubmit" variant="outlined" color="primary" onClick={this.onSubmit} disabled={!this.validate()}>
      Log In
      </Button>
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
)(Login)