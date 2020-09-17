import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Icons from '../../Icons/Icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 287,
    width: '287px',
    backgroundColor: '#5F39B7',
    color: '#fff',
    borderRadius: '6px',
    marginTop: '10px',
    marginRight: '10px',
  },
  bullet: {
    width: '6px',
    height: '6px',
    display: 'inline-block',
    margin: '0 5px',
    color: '#6FF27B',
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  pos: {
    marginBottom: 6,
    color: '#fff',
  },
  line: {
    width: '78px',
    height: '4px',
    background: '#95C7EE',
    display: 'inline-grid',
    margin: '3px 1px',
    borderRadius: '5px',
  },
  center: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: '18px 22px',
    backgroundColor: '#764ED4',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#7a55d0',
    },
  },
  prize: {
    fontSize: '60px',
    color: '#fff',
    fontWeight: 'bold',
  },
  prizeValue: {
    fontSize: '20px',
  },
  price: {
    padding: '8px 26px 8px 26px',
    borderRadius: '19px',
    background: '#FFE926',
    fontSize: '16px',
    color: 'black',
    width: '113px',
    margin: 'auto',
    marginTop: '14px',
  },
  iconWidth: {
    width: '23px',
  },
});

const GameCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}>5 კაციანი</Typography>
        <Typography className={classes.line}></Typography>
        {bull}
        <Grid item className={classes.center}>
          <Typography className={classes.prize} variant="h5" component="h2">
            5000 <span className={classes.prizeValue}>GEL</span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            მაქს. მოგება
          </Typography>
          <Typography variant="h5" component="h2">
            <Box>
              <Box component="span" m={1}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={1}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={1}>
                <Icons iconType="offline" />
              </Box>
              <Box component="span" m={1}>
                <Icons iconType="offline" />
              </Box>
              <Box component="span" m={1}>
                <Icons iconType="offline" />
              </Box>
            </Box>
          </Typography>
          <Typography className={classes.price}>5 ლარი</Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          disableElevation
          className={classes.button}
          onClick={props.handleClick}
          registered={props.registerd}
        >
          რეგისტრაცია
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
