import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { getCategory } from '../actions/category.action';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Category extends React.Component {
  state = {
    selectedIndex: -1,
  };

  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }

  handleSelectedCategory = (index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;
    // const { selectedIndex } = this.state;
	
    return (
      <List className={classes.root}>
         Categories will be here
				 <List component="nav">
        <ListItem button>
          <ListItemText primary="Category A" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Category B" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Category C" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Category D" />
        </ListItem>
      </List>
      </List>
    )
  }
}


const mapStateToProps = state => ({
  //category: state.category.category,
});

const mapDispatchToProps = {
  getCategory: getCategory
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Category)
);

/*
	key={category.id}
	id={category.id}
	title={category.title}
	description={category.description}
	selected={selectedIndex === category.id}
	onClick={() => this.handleSelectedCategory(category.id, category.title)}
*/


/*import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px'
  },
});

function Category(props) {
	const {title} = this.props.data 
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Category1" 
						id={this.props.category.id}
						title={this.props.data.category.title}
						description={this.props.category.description}/>
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Category2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Category3" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Category4" />
        </ListItem>
      </List>
    </div>
  );
}

Category.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired 
  })
}


export default withStyles(styles)(Category);*/