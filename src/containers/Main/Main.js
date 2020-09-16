import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

import GameTab from '../../components/GameTab/GameTab';
import GameCard from '../../components/Cards/GameCard/GameCard';
import GameTable from '../../components/GameTable/GameTable';
import BonusCard from '../../components/Cards/BonusCard/BonusCard';
import TopSpinCardContainer from '../../components/Cards/TopSpinCardContainer/TopSpinCardContainer';

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
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Container className={classes.containerWidth}>
      <Toolbar className={classes.toolbar}>
        <Grid container item xs={12}>
          <GameTab />
          <Grid container item>
            <Grid container item xs={3}>
              <GameCard />
            </Grid>
            <Grid container item xs={3}>
              <GameCard />
            </Grid>
            <Grid container item xs={3}>
              <GameCard />
            </Grid>
            <Grid container item xs={3}>
              <GameCard />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid container item xs={3}>
              <GameCard />
            </Grid>
            <Grid container item xs={3}>
              <GameCard />
            </Grid>
            <Grid container item xs={3}>
              <GameCard />
            </Grid>
            <Grid container item xs={3}>
              <GameCard />
            </Grid>
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
