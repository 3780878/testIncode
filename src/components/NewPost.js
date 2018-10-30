import React from "react";
import Button from '@material-ui/core/Button';
import FormPost from './FormPost';

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