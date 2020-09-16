import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Icons from '../../Icons/Icons';
import Modal from '../../Modal/Modal';
import BonusHistory from '../../BonusHistory/BonusHistory';

const useStyles = makeStyles({
  root: {
    width: '325px',
    maxWidth: '325px',
    backgroundColor: '#3B354A',
    color: '#fff',
    borderRadius: '6px',
    position: 'relative',
  },
  center: {
    textAlign: 'center',
    marginTop: '31px',
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
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  balance: {
    padding: '11px 26px 11px 26px',
    borderRadius: '27px',
    background: '#6E717E',
    fontSize: '15px',
    color: '#fff',
    margin: 'auto',
    marginTop: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spin: {
    padding: '11px 26px 11px 26px',
    borderRadius: '27px',
    background: '#217C8B',
    fontSize: '15px',
    color: '#fff',
    margin: 'auto',
    marginTop: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    marginTop: '12px',
  },
  bull: {
    width: '107px',
    height: '107px',
    margin: 'auto',
    borderRadius: '50%',
    background: '#5F39B7',
    border: '8px solid #9C75F8',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderRadius: '18px',
    border: '1px solid #60667E',
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#C5D8F9',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

const BonusCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal handleClose={handleClose} open={open}>
        <BonusHistory />
      </Modal>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleClickOpen}
              startIcon={<Icons iconType="time" />}
            >
              ისტორია
            </Button>
          </CardActions>
          <Grid item className={classes.center}>
            <Typography className={classes.bull}>
              <Icons iconType="logo" />
            </Typography>
            <Typography className={classes.title}>Muscul Bones</Typography>
          </Grid>
          <Typography className={classes.balance} variant="h5" component="h2">
            <Grid className={classes.pos}>
              <span className={classes.img}>
                <Icons iconType="goldcoin" />
              </span>
              ბალანსი
            </Grid>
            995.65 GEL
          </Typography>
          <Typography className={classes.spin} variant="h5" component="h2">
            <Grid className={classes.pos}>
              <span className={classes.img}>
                <Icons iconType="spin" />
              </span>
              უფასო სპინები
            </Grid>
            18 GEL
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default BonusCard;
