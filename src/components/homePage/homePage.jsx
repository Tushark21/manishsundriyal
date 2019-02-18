import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography paragraph>
            <Typing>
              <span>Hello, my name is Manish.</span>
              <br />
              <span> This span will get typed, then erased.</span>
              <Typing.Backspace count={38} />
              <span> This span will get typed, then erased.</span>
              <Typing.Backspace count={38} />
              <span> This span will get typed, not erased.</span>
            </Typing>
            </Typography>
            <Typography paragraph>
              Add Sub Main content here
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img
              src="https://amp.businessinsider.com/images/5be9ede366be501cf82e377b-750-422.jpg"
              alt="Nature"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto'
              }}
              width="800" height="500" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(HomePage);
