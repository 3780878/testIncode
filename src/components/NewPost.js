import React from "react";
import Button from '@material-ui/core/Button';
import FormPost from './FormPost';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const  NewPost = (props) => {

  return (
    this.props.categories.map((category)=> (
    <div>
    <FormControl>
    <Select>
    <Paper key={category.id}>
      <Category category={category}/>
    </Paper>
    </Select>
    </FormControl>
    <Paper item xs={9}>
     { FormPost }          
    </Paper>
      </div>
  )))
};
export default NewPost;

/*
 <Select
    //value={this.state.age}
    //onChange={this.handleChange}
    input={
      <OutlinedInput
        //labelWidth={this.state.labelWidth}
        //name="age"
        //id="outlined-age-simple"
      />
    }
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>


*/