import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import TopSpinCard from './TopSpinCard/TopSpinCard';

const useStyles = makeStyles({
  root: {
    width: '325px',
    maxWidth: '325px',
    backgroundColor: '#35364A',
    color: '#fff',
    borderRadius: '6px',
    marginTop: '10px',
    padding: '10px',
  },
  title: {
    fontSize: 15,
    color: '#CAD0F1',
    marginTop: '12px',
  },
  line: {
    width: '78px',
    height: '4px',
    background: '#BDC63E',
    display: 'inline-grid',
    margin: '3px 1px',
    borderRadius: '5px',
  },
  bullet: {
    width: '6px',
    height: '6px',
    display: 'inline-block',
    margin: '0 5px',
    color: '#9A6FF2',
  },
});

const TopSpinCardContainer = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <Typography className={classes.title}>ტოპ სპინები</Typography>
      <Typography className={classes.line}></Typography>
      {bull}
      <>
        <TopSpinCard />
        <TopSpinCard />
        <TopSpinCard />
        <TopSpinCard />
        <TopSpinCard />
      </>
    </Card>
  );
};

export default TopSpinCardContainer;
