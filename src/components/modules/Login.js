import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import './loginstyles.css';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { handleLogin } from '../../actions/UserAction';


class Login extends Component {
state = {
  name: '',
  password: ''
}
onChange = event => {
  console.log(event.target.value);
  this.setState({ name: event.target.value })
}

onSubmit = event => {
  event.handleLogin()
}


render(){
  return (
    <div>
      <form  onSubmit={this.onSubmit} noValidate autoComplete="off">
        <TextField className="textfields"
        id="outlined-name"
        label="Name"        
        value={this.state.name}
        onChange={this.onChange}
        margin="normal"
        variant="outlined"/>    
        <TextField className="textfields"
        id="outlined-password-input"
        label="Password"        
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"/>
      </form>
      <Button variant="outlined" color="primary">
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


const mapDispatchToProps =  ({
  handleLogin
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

