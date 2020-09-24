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
import cardImg from '../../../assets/img/xmas.png';

const useStyles = makeStyles({
  cardhead: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardheadtitle: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridColumnGap: '37px',
    alignItems: 'center',
  },
  cardbody: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2,233px)',
    gridColumnGap: '20px',
    justifyContent: 'center',
    marginTop: '16px',
  },
  carttitle: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '-15px',
    backgroundColor: '#198a9c',
    padding: '4px 11px',
    fontSize: '16px',
    borderRadius: '10px',
    margin: '0px',
    whiteSpace: 'nowrap',
  },
  cardbodyborder: {
    border: '2px solid #56BEC9',
    borderRadius: '10px',
    padding: '13px',
    width: '100%',
    height: '133px',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '60px',
    textTransform: 'uppercase',
    color: 'white',
  },
  cardbottom: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
    justifyItems: 'end',
    marginTop: '29px',
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
  line: {
    width: '78px',
    height: '4px',
    background: '#95C7EE',
    display: 'inline-grid',
    margin: '6px 1px',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#2DBFB5',
    color: '#fff',
    fontSize: '19px',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '15px 27px',
    '&:hover': {
      backgroundColor: '#2DBFB5',
    },
  },
  prize: {
    fontSize: '40px',
    color: '#fff',
    fontWeight: 'bold',
  },
  prizeValue: {
    fontSize: '15px',
  },
  price: {
    padding: '8px 26px 8px 26px',
    borderRadius: '19px',
    background: '#FFE926',
    fontSize: '16px',
    color: 'black',
    width: '113px',
  },
  iconWidth: {
    width: '30px',
    height: '30px',
  },
});

const GameCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={props.style} variant="outlined">
      <CardContent style={{ paddingBottom: '10px' }}>
        <Grid item>
          <Typography className={classes.cardhead} variant="h5" component="div">
            <Typography variant="h5" component="h2">
              <Typography className={classes.title}>5 კაციანი</Typography>
              <Typography className={classes.line}></Typography>
              {bull}
            </Typography>
            <Typography
              className={classes.cardheadtitle}
              variant="h5"
              component="div"
            >
              <Typography className={classes.price}>5 ლარი</Typography>
              <Typography className={classes.prize} variant="h5" component="h2">
                5000 <span className={classes.prizeValue}>GEL</span>
              </Typography>
            </Typography>
          </Typography>

          <Typography className={classes.cardbody} variant="h5" component="div">
            <Box className={classes.cardbodyborder} component="div" m={1}>
              5X
              <Box className={classes.carttitle} component="div" m={1}>
                კოეფიციენტი
              </Box>
            </Box>
            <Box className={classes.cardbodyborder} component="div" m={1}>
              <img
                src={cardImg}
                alt="Card img"
                style={{ width: '100%', height: '100%' }}
              />
              <Box className={classes.carttitle} component="span" m={1}>
                JAMING JARS
              </Box>
            </Box>
          </Typography>
          <Typography
            className={classes.cardbottom}
            variant="h5"
            component="h2"
          >
            <Box>
              <Box component="span" m={3} className={classes.icon}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={3}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={3}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={3}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={3}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
            </Box>
            <CardActions style={{ padding: '0px' }}>
              <Button
                variant="contained"
                size="large"
                disableElevation
                className={classes.button}
              >
                დაწყება
              </Button>
            </CardActions>
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GameCard;
