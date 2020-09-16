import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Icons from '../Icons/Icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',
    background: '#3D2F60',
    borderRadius: '5px',
    color: '#ffffff',
    marginRight: '10px',
  },
  selectedTab: {
    color: '#FFFF00',
  },
  user: {
    display: 'flex',
    paddingRight: '20px',
    alignItems: 'center',
  },
}));

const GameTab = (props) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper className={classes.paper}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              height: '4px',
              backgroundColor: '#FF00B2',
              borderTopRightRadius: '25px',
              borderTopLeftRadius: '25px',
              '&:selected': {
                color: '#fff',
              },
            },
          }}
        >
          <Tab label="ALL GAMES" classes={{ selected: classes.selectedTab }} />
          <Tab
            label="ONLY 3 PLAYER"
            classes={{ selected: classes.selectedTab }}
          />
          <Tab
            label="ONLY 5 PLAYER"
            classes={{ selected: classes.selectedTab }}
          />
        </Tabs>
        <Grid item className={classes.user}>
          <Grid item>
            <Icons iconType="online" />
          </Grid>
          <Grid item style={{ paddingLeft: '8px' }}>
            Online Players: 4364
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default GameTab;
