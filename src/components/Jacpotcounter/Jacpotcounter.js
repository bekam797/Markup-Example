import React from 'react';
import './Jacpotcounter.css';
import Paper from '@material-ui/core/Paper';

const JacpotCounter = (props) => (
  <div className="Jacpotcounter">
    <h2 className="Jacpotcounter__nums">
      <Paper className="Jacpotcounter__nums__digit">8</Paper>
      <Paper className="Jacpotcounter__nums__digit">2</Paper>
      <Paper className="Jacpotcounter__nums__digit">5</Paper>
      <Paper className="Jacpotcounter__nums__digit">9</Paper>
      <Paper className="Jacpotcounter__nums__digit">1</Paper>
      <i className="Jacpotcounter__nums__digits__dot">.</i>
      <Paper className="Jacpotcounter__nums__digits__small">9</Paper>
      <Paper className="Jacpotcounter__nums__digits__small">2</Paper>
    </h2>
    <p className="Jacpotcounter__title">LEADER JACKPOT</p>
  </div>
);

export default JacpotCounter;
