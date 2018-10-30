import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from '../../actions/post.action';
import { getCategory } from '../../actions/category.action';
import Category from '../../components/Category';
import Post from '../../components/Post';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Main extends Component {
  state = {
    scroll: 'paper'
  };
  componentDidMount() {
    this.props.getCategory();
    this.props.getPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => (
      <Paper key={post.id} className="lilistofPost">
        <Post post={post}/>
      </Paper>
    ))
  }

  renderCategories() {
    return this.props.categories.map((category)=> (
      <Paper key={category.id} className="styleCatList">
        <Category category={category}/>
      </Paper>
    ))
  }

  render(){
    return (
			<div>
        <Grid container spacing={24}>
        <Grid item xs={3}>
          {this.renderCategories()}
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
});

const mapDispatchToProps = {
  getPosts,
  getCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)



