import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost } from '../../actions/post.action';
import { getCategory } from '../../actions/category.action';
import Category from '../../components/Category';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category:[],
      scroll: 'paper'
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
         <Grid container spacing={24}>
        <Grid item xs={3}>
          <Paper scroll={this.state.scroll} ><Category/></Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper>Posts will be here</Paper>
        </Grid>
        </Grid>
        
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



