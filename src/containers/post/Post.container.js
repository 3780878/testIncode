import React, { Component } from "react";
import { connect } from "react-redux";
import { sendPost } from '../../actions/post.action';
import SinglePost from '../../components/Post';

class Post extends Component {
  state = {
    title: '',
    description: ''
  }
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.sendPost({ title:this.state.title, description:this.state.description})
  }

  render(){
    return (
      <SinglePost
        title={this.state.title}
        description={this.state.description}
        onSubmit={this.onSubmit}/> 
    )
  }
}

const mapStateToProps = state => ({
  //???
})

const mapDispatchToProps = {
  sendPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)