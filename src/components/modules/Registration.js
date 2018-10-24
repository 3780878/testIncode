import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { handleRegistration } from '../../actions/registerAction';

class Registration extends Component {
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
  this.props.handleRegistration({name:this.state.name, password:this.state.password})
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
      <form autoComplete="off">
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
        onChange={this.onChangePassword}
        autoComplete="current-password"
        margin="normal"
        variant="outlined"/>
      </form>
      <Button  variant="outlined" color="primary" onClick={this.onSubmit} disabled={!this.validate()}>
      Registration
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
  handleRegistration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)