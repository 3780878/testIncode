import React from "react";
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

const Header = props =>  {
  const renderIfLoggedIn = (element) => {
    console.log(props);
    if (props.isLoggedIn) {
      return element;
    }
    return (
      <header> 
      <Paper>
      <div>
      <MenuList>
        <Link to='/login'><MenuItem>Login</MenuItem></Link>
        <Link to='/register'><MenuItem>Register</MenuItem></Link>
      </MenuList>
      </div>
      </Paper> 
      </header>
    );
  }
  return (
    <header> 
      <Paper>
      {
      renderIfLoggedIn(
      <div>
        <MenuList>
          <Link to='/'><MenuItem>Main</MenuItem></Link>
          <Link to='/profile'><MenuItem>My profile</MenuItem></Link>
          <Link to='/logout'><MenuItem>Logout</MenuItem></Link>
        </MenuList>
      </div>
        )
      } 
      </Paper>     
    </header>
  )
}
  
export default Header;
