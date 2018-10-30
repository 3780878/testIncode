import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewPost } from '../../actions/auth.action';
import NewPost from '../../components/NewPost';

class Post extends Component {
  state = {
    title: '',
    body: ''
  }
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = event => {
    this.setState(event)
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addNewPost({ title:this.state.title, body:this.state.body})
  }

  render(){
    return (
      <NewPost
        title={this.state.title}
        body={this.state.body}
        onChange={this.onChange}
        onSubmit={this.onSubmit}/> 
    )
  }
}

const mapStateToProps = state => ({
  user: state.root.user,
  /////////////////////////////
})

const mapDispatchToProps = {
  addNewPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)










/*import React, { Component } from "react";
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
)(Post)*/