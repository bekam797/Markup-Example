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
import AnimatedLine from '../../UI/AnimatedLine/AnimatedLine';

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
  closeButton: {
    backgroundColor: '#1A6F7D',
    color: '#fff',
    fontSize: '19px',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '15px 27px',
    '&:hover': {
      backgroundColor: '#257f8e',
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
  waitingCard: {
    display: 'grid',
    gridRowGap: '26px',
    justifyItems: 'center',
    textAlign: 'center',
    position: 'relative',
    marginTop: '30px',
  },
  waitingCardTitle: {
    fontSize: '20px',
    color: '#fff',
  },
  waitingCardTime: {
    fontSize: '14px',
    color: '#fff',
  },
});

const GameStartingCard = (props) => {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const bull = <span className={classes.bullet}>•</span>;

  const handleCardBodyChange = () => {
    setShow(true);
  };

  let cardBody = (
    <>
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
      <Typography className={classes.cardbottom} variant="h5" component="h2">
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
            onClick={handleCardBodyChange}
          >
            დაწყება
          </Button>
        </CardActions>
      </Typography>
    </>
  );

  if (show) {
    cardBody = (
      <>
        <Typography
          className={classes.waitingCard}
          variant="h5"
          component="div"
        >
          <Typography
            variant="h5"
            component="h2"
            className={classes.waitingCardTitle}
          >
            გთხოვთ დაელოდოთ მოწინააღდმეგეს
          </Typography>
          <Typography variant="h5" component="div">
            <Box>
              <Box component="span" m={4} className={classes.icon}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={4}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={4}>
                <Icons iconStyle={classes.iconWidth} iconType="online" />
              </Box>
              <Box component="span" m={4}>
                <Icons iconStyle={classes.iconWidth} iconType="offline" />
              </Box>
              <Box component="span" m={4}>
                <Icons iconStyle={classes.iconWidth} iconType="offline" />
              </Box>
            </Box>
          </Typography>
          <Typography variant="h5" component="h2">
            <Typography
              variant="h5"
              component="p"
              className={classes.waitingCardTime}
            >
              სავარაუდო მოლოდინის დრო: 30 წამი
            </Typography>
            <AnimatedLine />
          </Typography>
        </Typography>
        <Typography className={classes.cardbottom} variant="h5" component="h2">
          <CardActions style={{ padding: '0px' }}>
            <Button
              variant="contained"
              size="large"
              disableElevation
              className={classes.closeButton}
              onClick={props.handleClose}
            >
              დახურვა
            </Button>
          </CardActions>
        </Typography>
      </>
    );
  }

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
          {cardBody}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GameStartingCard;
