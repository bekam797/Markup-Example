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

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: '#B5B7BE',
    borderBottom: '#333',
    // borderRadius: '5px',
    backgroundColor: '#35364A',
  },
  body: {
    fontSize: 14,
    borderBottom: '1px solid #35364A',
    color: theme.palette.common.white,
    backgroundColor: '#444563',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#252630',
    },
  },
}))(TableRow);

function createData(date, amount, x, quantity, users, place, winning) {
  return { date, amount, x, quantity, users, place, winning };
}

const rows = [
  createData(
    '23 იანვ.',
    '2 ლარი',
    '100X',
    '5 კაციანი',
    'ნოდარა, ელდარა, ემზარა',
    '10',
    '5000 ლარი'
  ),
  createData(
    '23 იანვ.',
    '2 ლარი',
    '100X',
    '5 კაციანი',
    'ნოდარა, ელდარა, ემზარა',
    '10',
    '5000 ლარი'
  ),
  createData(
    '23 იანვ.',
    '2 ლარი',
    '100X',
    '5 კაციანი',
    'ნოდარა, ელდარა, ემზარა',
    '10',
    '5000 ლარი'
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    backgroundColor: '#2B2E3A',
  },
  winning: {
    color: '#FFD919',
    padding: '4px 12px',
  },
});

const BonusHistory = () => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">თარიღი</StyledTableCell>
              <StyledTableCell align="left">ღირებუ.ი</StyledTableCell>
              <StyledTableCell align="left">რაXი</StyledTableCell>
              <StyledTableCell align="left">რაოდენობა</StyledTableCell>
              <StyledTableCell align="left">მონაწილეებიი</StyledTableCell>
              <StyledTableCell align="center">ადგილიი</StyledTableCell>
              <StyledTableCell align="center">მოგებული</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="left">{row.amount}</StyledTableCell>
                <StyledTableCell align="left">{row.x}</StyledTableCell>
                <StyledTableCell align="left">{row.quantity}</StyledTableCell>
                <StyledTableCell align="left">
                  <Box component="span" m={1}>
                    <Icons iconType="online" />
                  </Box>
                  {row.users}
                </StyledTableCell>
                <StyledTableCell align="center">{row.place}</StyledTableCell>
                <StyledTableCell align="center" className={classes.winning}>
                  {row.winning}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BonusHistory;
