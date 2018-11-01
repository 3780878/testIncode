import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Post(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent className="postlist">
        <Typography variant="h5" gutterBottom>Title: {props.post.title}</Typography>
        <Typography> About: {props.post.body}</Typography>
        <Typography>Posted by: {props.post.author_name}</Typography>
        <Typography>Posted by (id author): {props.post.author_id}</Typography>
        <Typography>Category: {props.post.category_name}</Typography>
        <Typography color="textSecondary">Category id: {props.post.category_id}</Typography>
        <Typography color="textSecondary">Post id: {props.post.id}</Typography>
        <Typography color="textSecondary">{bull}Data: {props.post.posted_at}</Typography>
        <Typography color="textSecondary">{bull}Updated: {props.post.updated_at}</Typography>
      </CardContent>
    </Card>
  );
}
Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);