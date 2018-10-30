import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsOfUser } from '../../actions/post.action';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

class Profile extends Component {
	
	componentDidMount() {
		// this.getPostsOfUser(this.props.user.id);
	}

  render() {
		
    return (
      <Paper>
        <List>
					<ListItemText> { this.props.user.login } </ListItemText>
    		</List>
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
