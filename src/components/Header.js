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
      <header className="paper">
        <Paper>
          <MenuList className="menu">
            <Link to='/login'><MenuItem className="menuItem nav-item">Login</MenuItem></Link>
            <Link to='/register'><MenuItem className="menuItem nav-item">Register</MenuItem></Link>
          </MenuList>
        </Paper> 
      </header>
    );
  }
  return (
    <header  className="paper"> 
      <Paper>
      {
      renderIfLoggedIn(
        <MenuList className="menu">
          <Link className="menuItem" to='/main'><MenuItem className="nav-item">Main</MenuItem></Link>
          <Link className="menuItem" to='/profile'><MenuItem className="nav-item">My profile</MenuItem></Link>
          <Link className="menuItem" to='/login' onClick={props.onLogout}><MenuItem className="nav-item">Logout</MenuItem></Link>
        </MenuList>
        )
      } 
      </Paper>     
    </header>
  )
}

export default Header;