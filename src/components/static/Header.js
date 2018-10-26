import React from "react";
// import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
// import MenuList from '@material-ui/core/MenuList';

const menu = require('../menu.json');

// const Show = () =>{
//   return menu.map((el,k)=><li className="nav-item" key={k}><Link className="menuItem" to={el.link} >{el.name}</Link></li>);
// }

const Header = props =>  {
  const renderIfLoggedIn = (element) => {
    console.log(props);
    if (props.isLoggedIn) {
      return element;
    }
    return (
      <div>
        <div>Login</div>
        <div>Register</div>
      </div>
    );
  }
  return (
    <header> 
      <Paper />
      {
        renderIfLoggedIn(
          <div>
            <div>Main</div>
            <div>Home</div>
            <div>Logout</div>
          </div>
        )
      }      
    </header>
  )
}
  
export default Header;
