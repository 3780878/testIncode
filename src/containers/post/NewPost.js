import React, { Component }  from "react";
import { connect } from "react-redux";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { getCategory } from '../../actions/category.action';
import Grid from '@material-ui/core/Grid';
import { addNewPost } from '../../actions/newpost.action';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { addNewPostCreator } from '../../actions/post.action';
import Button from '@material-ui/core/Button';

class  NewPost extends Component {
  state = {
    title: '',
    body: '',
    value: 3,
    selectedCategory: ''
  }
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getCategory();
  }
  
  onSubmit(e) {  
    e.preventDefault();
    debugger;
    this.props.addNewPostCreator({
      title:this.state.title,
      body:this.state.body,
      category_id: this.state.selectedCategory,
      category_name: this.state.selectedCategoryName,
      author_name: this.props.user.login,
      author_id: this.props.user.id
    });
  }

  renderCategories() {
    return this.props.categories.map((category)=> (
        <MenuItem value={category.id} key={category.id}>
          { category.title }
        </MenuItem>
    ))
  }

  onChange(value, type) {
    this.setState({
      [type]: value
    })
  }

  handleSelectedCategory(event) {
    const cat =  this.props.categories.find((category) => category.id === event.target.value);
    this.setState({
      selectedCategory: event.target.value,
      selectedCategoryName: cat.title
    });
  }
  render(){
  return (
    <div>
      <Paper>
      <FormControl>
        <Grid>
          <div className="titleSelect">
            Chooise your category:
            <Select
                className="styleCatList selectCat" 
                value={this.state.selectedCategory}
                onChange={this.handleSelectedCategory}>
              { this.renderCategories() }
            </Select>
          </div>
        </Grid>
      
        <Grid item xs={9}>
        <TextField className="titleNewPost"
          id="outlined-full-width"
          label="Title"
          onChange={(e) => this.onChange(e.target.value, 'title')}
          style={{ margin: 8 }}
          placeholder="Subject of your post"
          xs={6}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
          shrink: true}}
        />
        <TextField className="descrOfNewPost"
          id="outlined-full-width"
          label="Description"
          onChange={(e) => this.onChange(e.target.value, 'body')}
          style={{ margin: 8 }}
          placeholder="Tell me about what your post will be.."
          fullWidth
          margin="normal"
          xs={5}
          height={3}
          variant="outlined"
          InputLabelProps={{
          shrink: true}}
        />
        <Button 
        onClick={this.onSubmit}
				className="buttonSubmit buttonCreatePost"
				variant="outlined"
        color="primary"
        size="large"
				type="submit">Create a new post</Button>
        </Grid>
        </FormControl>
        </Paper>

    </div>
  )
};
}

const mapStateToProps = state => ({
  categories: state.category.categories,
  post: state.root.post,
  hasChanges: state.post.hasChanges,
  isSubmit: state.post.isSubmit,
  user: state.root.user
});

const mapDispatchToProps = {
  getCategory,
  addNewPost,
  addNewPostCreator
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)