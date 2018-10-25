import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';

const menu = require('../menu.json');

const Show = () =>{
  return menu.map((el,k)=><li className="nav-item" key={k}><Link className="menuItem" to={el.link} >{el.name}</Link></li>);
}

class Header extends React.Component {
  state = {
    anchorEl: null,
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  render() {
    const { anchorEl } = this.state;
   return(
      <header>
        <Paper className="paper">
        <MenuList anchorEl={anchorEl} open={Boolean(anchorEl)} className="menu">
          <Show />
        </MenuList>
        </Paper>
      </header>
    ) 
}
}

  
export default connect(
    state => ({
    }),

    dispatch => ({
            
        }
    )
)(Header);
