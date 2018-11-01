import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, getPostsByCategory } from '../../actions/post.action';
import { getCategory } from '../../actions/category.action';
import Category from '../../components/Category';
import Post from '../../components/Post';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Main extends Component {
  state = {
    scroll: 'paper',
    selectedCategory: -1
  };

  constructor(props) {
    super(props);    

    this.renderCategories = this.renderCategories.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
  }
  componentDidMount() {
    this.props.getCategory();
    this.props.getPosts();
  }

  renderPosts() {
    // debugger;
    return this.props.posts.map((post) => (
      <Paper key={post.id} className="lilistofPost">
        <Post post={post}/>
      </Paper>
    ))
  }

  renderCategories() {
    return this.props.categories.map((category)=> (
      <Paper key={category.id} className="styleCatList">
        <Category 
          category={category}          
          onClick={this.handleSelectedCategory}
        />
      </Paper>
    ))
  }

  handleSelectedCategory(category) {
    this.props.getPostsByCategory(category);
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
  getCategory,
  getPostsByCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
