import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

import GameTab from '../../components/GameTab/GameTab';
import GameCard from '../../components/Cards/GameCard/GameCard';
import GameTable from '../../components/GameTable/GameTable';
import BonusCard from '../../components/Cards/BonusCard/BonusCard';
import TopSpinCardContainer from '../../components/Cards/TopSpinCardContainer/TopSpinCardContainer';
import GameStartingCard from '../../components/Cards/GameStartingCard/GameStartingCard';
import BackDrop from '../../components/UI/BackDrop/BackDrop';

const useStyles = makeStyles((theme) => ({
  containerWidth: {
    maxWidth: '1633px',
    marginBottom: '56px',
  },
  toolbar: {
    padding: '0',
    alignItems: 'inherit',
  },
  gridheight: {
    height: '100%',
  },
  root: {
    width: '585px',
    backgroundColor: '#198a9c',
    color: '#fff',
    borderRadius: '6px',
    marginTop: '10px',
    marginRight: '10px',
    position: 'absolute',
    zIndex: '1300',
  },
  rootR: {
    right: '0',
  },
}));

const ides = [0, 1, 2, 3, 4, 5, 6, 7];

const Main = () => {
  const classes = useStyles();

  const [registerd, setRegisterd] = useState(false);
  const [num, setNum] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setNum(id);
    setRegisterd(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRegisterd(false);
  };

  let cards = ides.map((id) => {
    console.log();
    if (id === num && registerd) {
      return (
        <Grid key={id} container item xs={3}>
          <BackDrop open={open} handleClose={handleClose}>
            {' '}
          </BackDrop>
          <GameStartingCard
            style={
              id === 3 || id === 7
                ? [classes.root, classes.rootR].join(' ')
                : classes.root
            }
          />
        </Grid>
      );
    } else {
      return (
        <Grid key={id} container item xs={3}>
          <GameCard
            registerdCard={registerd}
            handleClick={() => handleClick(id)}
          />
        </Grid>
      );
    }
  });

  return (
    <Container className={classes.containerWidth}>
      <Toolbar className={classes.toolbar}>
        <Grid container item xs={12} className={classes.gridheight}>
          <GameTab />
          <Grid container item style={{ position: 'relative' }}>
            {cards}
          </Grid>
          <GameTable />
        </Grid>
        <Grid
          container
          item
          xs={4}
          height="100%"
          className={classes.gridheight}
        >
          <BonusCard />
          <TopSpinCardContainer />
        </Grid>
      </Toolbar>
    </Container>
  );
};

export default Main;
