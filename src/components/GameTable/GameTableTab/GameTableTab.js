import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',
    background: 'transparent',
    borderRadius: '5px',
    color: '#ffffff',
    marginRight: '10px',
    boxShadow: 'none',
    marginTop: '40px',
  },
  selectedTab: {
    color: '#6D728E',
  },
  user: {
    display: 'flex',
    paddingRight: '20px',
    alignItems: 'center',
  },
}));

const GameTableTab = (props) => {
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
              backgroundColor: '#6D728E',
              borderRadius: '4px',
              '&:selected': {
                color: '#fff',
              },
            },
          }}
        >
          <Tab
            label="ტოპ მოგებები"
            classes={{ selected: classes.selectedTab }}
          />
          <Tab label="ლიდერბორდი" classes={{ selected: classes.selectedTab }} />
          <Tab label="ისტორია" classes={{ selected: classes.selectedTab }} />
          <Tab label="წესები" classes={{ selected: classes.selectedTab }} />
        </Tabs>
      </Paper>
    </>
  );
};

export default GameTableTab;
