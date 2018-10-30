import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsOfUser } from '../../actions/post.action';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

class Profile extends Component {
	
	componentDidMount() {
		this.getPostsOfUser = this.props.user.id;
	}

  /*renderPosts() {
    return this.props.posts.map((post) => (
      <Paper key={post.id} className="lilistofPost">
        <Post post={post}/>
      </Paper>
    ))
	}*/
	  render() {
		
    return (
      <Paper>
        <List>
					<ListItemText> { this.props.user.login } </ListItemText>
    		</List>
				<Grid item xs={9}>
          { this.props.user.posts }          
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
	user: state.root.user
});

const mapDispatchToProps = {
	getPostsOfUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)