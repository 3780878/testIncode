import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Category(props) {
  return(
    <List component="nav" className="listCateg">
      <ListItem button className="categoryStyle">
        <ListItemText primary={props.category.title} className="labelCat"/>
      </ListItem>
    </List>
    )
  }
  export default (Category);