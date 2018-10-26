import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
//import {  } from '../../actions/';
import Grid from '@material-ui/core/Grid';
import CategoryArray from './FilterMain';

class Home extends Component {
  state = {
    category: {
      id: '',
      title: '',
      description: ''    
    },
    posts: [
      {
        id: '',
        title: '',
        body: '',
        author_id: '',
        author_name: '',
        category_id: '',
        category_name: '',
        posted_at: 0,
        updated_at: 0
      }
    ]
  }

  /*onChange = event => {
    this.setState({ category: event.target.value })
    this.setState({post:event.target.value})
  }*/

  /*Function for filter posts from click on title of categories i think
  onSubmit = () => {
    this.props.filterCategory({category:this.state.title})
  }*/


  render(){
    return (
      <div container="true">
      <form autoComplete="off" className="dflexForm" spacing={2}>
      <CategoryArray>Chooise your category</CategoryArray>
        <Grid><TextField className="textfields"
        id="outlined-name"
        label="Title of Category"        
        value={this.state.category.title}
        //onChange={this.onChange}
        xs={6}
        variant="outlined"/> </Grid>   
        <Grid><TextField className="textfields"
        xs={6}
        id="outlined-password-input"
        label="Description"        
        type="description"
        //onChange={this.onChange}
        margin="normal"
        variant="outlined"/></Grid>
      </form>
      <Button  size="large"  className="buttonSubmit" variant="outlined" color="primary" onClick={this.onSubmit}>
      Add this category
      </Button>
    </div>
      )
    }
  }
const mapStateToProps = state => ({
  
  
  
  /*user: state.user,
  isValid: state.isValid,
  isSubmitting: state.isSubmitting*/
})

const mapDispatchToProps = {
  CategoryArray
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)