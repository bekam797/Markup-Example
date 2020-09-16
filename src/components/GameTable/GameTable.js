import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Icons from '../Icons/Icons';
import GameTableTab from './GameTableTab/GameTableTab';

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: '#B5B7BE',
    borderBottom: '#333',
    borderRadius: '5px',
  },
  body: {
    fontSize: 14,
    borderBottom: '#333',
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#252630',
    },
  },
}))(TableRow);

function createData(number, time, coefficient, user, winningNum) {
  return { number, time, coefficient, user, winningNum };
}

const rows = [
  createData('#4412452', '12:33', 2.37, 'Nodard...', '33.35₾'),
  createData('#4412452', '12:33', 2.37, 'Nodard...', '33.35₾'),
  createData('#4412452', '12:33', 2.37, 'Nodard...', '33.35₾'),
  createData('#4412452', '12:33', 2.37, 'Nodard...', '33.35₾'),
  createData('#4412452', '12:33', 2.37, 'Nodard...', '33.35₾'),
];

const useStyles = makeStyles({
  paper: {
    marginTop: '10px',
    marginRight: '10px',
  },
  table: {
    minWidth: 700,
    backgroundColor: '#2B2E3A',
  },
  iconCellRel: {
    position: 'relative',
  },
  iconCell: {
    width: '3px',
    background: '#383946',
    position: 'absolute',
    height: '27px',
    right: '0',
  },
  coefficient: {
    color: '#FFD919',
    padding: '4px 16px',
    fontSize: '15px',
    borderRadius: '15px',
    backgroundColor: '#323341',
  },
  winningNum: {
    color: '#FFD919',
    padding: '4px 12px',
    fontSize: '15px',
    borderRadius: '15px',
    backgroundColor: '#5F39B7',
  },
});

const GameTable = () => {
  const classes = useStyles();

  return (
    <>
      <GameTableTab />
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>ნომერი</StyledTableCell>
              <StyledTableCell align="center">დრო</StyledTableCell>
              <StyledTableCell align="center">კოეფიციენტი</StyledTableCell>
              <StyledTableCell align="center">მომხმარებელი</StyledTableCell>
              <StyledTableCell align="center">მოგებული თანხა</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center" className={classes.iconCellRel}>
                  <Icons iconType="cherrie" />
                  <span className={classes.iconCell}></span>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.number}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box component="span" m={1}>
                    <Icons iconType="time" />
                  </Box>
                  {row.time}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box className={classes.coefficient} component="span" m={1}>
                    {row.coefficient}
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box component="span" m={1}>
                    <Icons iconType="online" />
                  </Box>
                  {row.user}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box className={classes.winningNum} component="span" m={1}>
                    {row.winningNum}
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default GameTable;
