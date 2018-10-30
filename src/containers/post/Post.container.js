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
  user: state.root.user
})

const mapDispatchToProps = {
  addNewPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)