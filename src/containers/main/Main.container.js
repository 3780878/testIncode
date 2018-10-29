import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from '../../actions/post.action';
import { getCategory } from '../../actions/category.action';
// import Category from '../../components/Category';
import Post from '../../components/Post';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Main extends Component {
  
  componentDidMount() {
    this.props.getCategory();
    this.props.getPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => (
      <Paper key={post.id}>
        <Post post={post}/>
      </Paper>
    ))
  }

  renderCategories() {
    
  }

  render(){
    return (
			<div>
        <Grid container spacing={24}>
        <Grid item xs={3}>
          {/* <Paper scroll={this.state.scroll} ><Category/></Paper> */}
        </Grid>
        <Grid item xs={9}>
          { this.renderPosts() }          
        </Grid>
        </Grid>
        
			</div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  posts: state.post.posts
  //title: state.category.title
});


/*const mapDispatchToProps = (dispatch)=>{
  return {
    getCategory: () => {
      dispatch(getCategory());
    }
  }
}*/

const mapDispatchToProps = {
  getPosts,
  getCategory
};
/*const mapDispatchToProps = dispatch => ({
    action: getCategory(dispatch)
})*/


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)



