import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';

import Icons from '../Icons/Icons';
import JacpotCounter from '../Jacpotcounter/Jacpotcounter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerWidth: {
    maxWidth: '1633px',
  },
  header: {
    background: 'transparent',
    boxShadow: 'none',
    height: '106px',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    background: '#FFCA2A',
    borderRadius: '21px',
    padding: '9px 16px',
    '&:hover': {
      backgroundColor: '#eb9707',
    },
  },
  pointer: {
    cursor: 'pointer',
    color: '#AFBBC4',
  },
  toolbar: {
    padding: '0',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Container className={classes.containerWidth}>
          <Toolbar variant="dense" className={classes.toolbar}>
            <Grid container item xs={5}>
              <Icons iconType="logo" />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <JacpotCounter />
              </Grid>
              <Grid item>
                <JacpotCounter />
              </Grid>
            </Grid>
            <Grid container item xs={6} spacing={3}>
              <Grid item>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<Icons iconType="coin" />}
                >
                  Cashier
                </Button>
              </Grid>
              <Grid
                container
                item
                xs={6}
                alignItems="center"
                // justify="flex-end"
                justify="space-between"
              >
                <VolumeUpIcon className={classes.pointer} />
                <SettingsIcon className={classes.pointer} />
                <AppsIcon className={classes.pointer} />
                <ZoomOutMapIcon className={classes.pointer} />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
