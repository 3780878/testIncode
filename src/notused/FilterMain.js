import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import categories from './cateroiesDemo'

class CategoryArray extends React.Component {
  state = {
    // chipData: [...this.state.chipData.map(data => {this.state.label}) ]
  }
  


  handleDelete = data => () => {
    if (data.label === 'Recommented') {
      alert('Why would you want to delete Recommented posts?! :)'); 
      return;
    }

    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };
  render() {

    return (
    //   <Paper>
    //       return (
    //         <Chip
    //           key={data.key}
    //           label={data.label}
    //           onDelete={this.handleDelete(data)}
    //         />
    //       );
     
    //   </Paper>
        <div></div>
    );
  }
};
CategoryArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({

  })
  
  const mapDispatchToProps = {
    //someactionAboutThis
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CategoryArray)

//export default withStyles(styles)(CategoryArray);*/

