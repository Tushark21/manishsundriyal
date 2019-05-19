import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardActions, Button, Link } from '@material-ui/core';


const styles = theme => ({
  root: {
    // ...theme.mixins.gutters(),
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    background: '#0a192f',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  media: {
    height: 200,
  },
});
class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts : [],
    };
  }
  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@manishsundriyal')
    .then(res => res.json())
    .then(data => {
      const posts = data.items;
      const blogPosts = posts.filter(post => post.categories.length > 0);
      this.setState({ blogPosts });
    });
  }
  getBlogPosts = () => {
    const { classes } = this.props;
    const { blogPosts = [] } = this.state;
    return blogPosts.map(blog => {
      return (
        <Card className={classes.root}>
          <CardActionArea>
            <Link href={blog.link}>
              <CardMedia
                className={classes.media}
                image={blog.thumbnail}
              />
            </Link>
            <CardContent>
              <Typography variant="h5" component="h3">
                {blog.title}
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      )
    });
  }
  render() {
    console.log(this.state.blogPosts);
    return (
      <React.Fragment>
        {this.getBlogPosts()}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(BlogPage);
