import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Icons from '../../../Icons/Icons';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#444563',
    color: '#fff',
    borderRadius: '6px',
    position: 'relative',
    marginTop: '10px',
  },
  img: {
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pos: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontSize: '15px',
    color: '#fff',
  },
  time: {
    fontSize: '15px',
    color: '#B5B7BE',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  prizeValue: {
    fontSize: '12px',
  },
  prize: {
    fontSize: '27px',
    color: '#39B7FF',
    fontWeight: 'bold',
  },
  coefic: {
    fontSize: '18px',
    color: '#D2EFFF',
    marginTop: '6px',
  },
});

const TopSpinCard = () => {
  const classes = useStyles();

  return (
    <CardContent className={classes.root}>
      <Typography className={classes.time} variant="h5" component="h2">
        <Grid className={classes.pos}>
          <span className={classes.img}>
            <Icons iconType="time" />
          </span>
        </Grid>
        23.04.19 20:33
      </Typography>
      <Typography className={classes.prize} variant="h5" component="h2">
        5000 <span className={classes.prizeValue}>GEL</span>
      </Typography>
      <Typography variant="h5" component="h2">
        <Grid className={classes.pos}>
          <span className={classes.img}>
            <Icons iconType="online" />
          </span>
          ნოდარა, ელდარა, ემზარა
        </Grid>
      </Typography>
      <Typography className={classes.coefic} variant="h5" component="h2">
        1000 X 2
      </Typography>
    </CardContent>
  );
};

export default TopSpinCard;
