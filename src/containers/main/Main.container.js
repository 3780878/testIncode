import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from '../../actions/post.action';
import { getCategory } from '../../actions/category.action';
import Category from '../../components/Category';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category:[]
  }
}
  componentDidMount() {
    this.props.getCategory();
 /* var category="title";
  fetch(category)
    .then(response => {
      return response.json();
    }).then(d => {
        let category = d.map((categoryData)=>{
          return(
            <div>{categoryData}</div>
          )
      })
      this.setState({category: category});
        console.log("state", this.state.category)
  })*/
}




  state = {
    category: [{
        id: '',
        title: '',
        description: ''
    }],
    posts: [
    {
        id: '',
        title: '',
        body: '',
        author_id: '',
        author_name: '',
        category_id: '',
        category_name: '',
        posted_at: 0,
        updated_at: 0
    }
    ]
  }

  render(){
    return (
			<div>
        <Category/>
			</div>
    )
  }
}

const mapStateToProps = state => ({
  //id: state.category.id,
  //title: state.category.title
});


const mapDispatchToProps = {
  getCategory
}

/*const mapDispatchToProps = (dispatch)=>{
  return {
    getCategory: () => {
      dispatch(getCategory());
    }
  }
}*/

/*const mapDispatchToProps = {
  getCategory(dispatch)
};*/
/*const mapDispatchToProps = dispatch => ({
    action: getCategory(dispatch)
})*/


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)



