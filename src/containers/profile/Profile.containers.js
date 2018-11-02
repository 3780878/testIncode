import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  getPosts, 
  getPostsOfUser, 
  deletePost,
  updatePost,
  switchPostToUpdateMode } from '../../actions/post.action';
import Post from '../../components/Post';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import NewPost from '../post/NewPost';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class Profile extends Component {
  state = {
    title: '',
    body: ''
  }
	componentDidMount() {
    this.props.getPostsOfUser(this.props.match.params.id);
	}
  constructor(props) {
    super(props);    
    this.renderPosts = this.renderPosts.bind(this);
    this.onSubmitUpdate = this.onSubmitUpdate.bind(this);
  }

  switchPostToUpdateMode = (id) => {
    this.props.switchPostToUpdateMode(id);
  }
  onSubmitUpdate(newPost) { 
    this.props.updatePost({
      id: newPost.id,
      title:newPost.title,
      body:newPost.body,
      category_id: newPost.category_id,
      category_name: newPost.category_name,
      author_name: newPost.author_name,
      author_id: newPost.author_id,
      updated_at: newPost.updated_at
    }, this.props.user.id);
  }
  onChange(value, type) {
    this.setState({
      [type]: value
    })
  }
  renderPosts() {
    return this.props.posts ? this.props.posts.map((post, index) => (
      
        !this.props.postsToUpdate[index].isUpdating ? 
        (
          <Paper key={post.id} className="lilistofPost"><Post post={post}/>
            <Button 
              onClick={() => {
                this.props.deletePost(post.id, this.props.user.id);
              }} 
              size="large">
              Delete
            </Button>
            <Button onClick={() => {this.switchPostToUpdateMode(post.id)}} size="large">Update</Button>
          </Paper>
        ) : (
          <Paper key={post.id} className="lilistofPost">
          <FormControl>
            <TextField
            onChange={(e) => this.onChange(e.target.value, 'title')}
              className="titleUpdate"
              label="Title"
              id="component-simple"
              defaultValue={post.title}
              margin="normal"
              />
            <TextField
              onChange={(e) => this.onChange(e.target.value, 'body')}
              className="bodyUpdate" 
              label="Body"
              defaultValue={post.body}
              margin="normal"
              multiline
            />
             </FormControl>
            <Button 
                className="butUpdate"
                onClick={() => 
               this.onSubmitUpdate({
                ...post, 
                title : this.state.title || post.title,
                body :  this.state.body || post.body,
                updated_at: new Date().getTime()
              })
              // this.onSubmitUpdate({
              //   ...post, title : 
              // })
            } size="large">Update</Button>
           
          </Paper>
        )
      
    ))
    : null;
  }
  renderUpdateForm() {
    return (
      <div>hello W</div>
    )
  }
	  render() {
		
    return (
      <Paper>
        <List className="topProfile">
					<ListItemText className="profileLogin"> Welcome to your page, dear { this.props.user.login }! </ListItemText>
    		</List>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <p className="newposttitle">Create your new post today:</p>
          </Grid>
          <Grid item xs={9}>
           <p>All your great posts: </p>       
          </Grid>
         </Grid>
         <Grid container spacing={16}>
          <Grid item xs={3}>
           <NewPost/>      
          </Grid>
          <Grid item xs={9}>
          { this.renderPosts() }
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  user: state.root.user,
  posts: state.post.posts,
  postsToUpdate : state.post.postsToUpdate,
  currentPost: state.post.posts.currentPost
});

const mapDispatchToProps = {
  getPosts,
  getPostsOfUser,
  deletePost,
  updatePost,
  switchPostToUpdateMode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)