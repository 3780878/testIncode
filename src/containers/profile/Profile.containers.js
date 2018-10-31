import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts, getPostsOfUser } from '../../actions/post.action';
import Post from '../../components/Post';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import NewPost from '../post/NewPost';
//import Button from '@material-ui/core/Button';

class Profile extends Component {
	
	componentDidMount() {
		this.getPostsOfUser = this.props.user.id;
	}
  constructor(props) {
    super(props);    

    this.renderPosts = this.renderPosts.bind(this);
  }
  renderPosts() {
    return this.props.posts.map((post) => (
      <Paper key={post.id} className="lilistofPost">
        <Post post={post}/>
      </Paper>
    ))
  }
  /*renderdeletePost(){
    return(
      <Button>Delete Post</Button>
    )
  }*/
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
  posts: state.post.posts
});

const mapDispatchToProps = {
  getPosts,
  getPostsOfUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)