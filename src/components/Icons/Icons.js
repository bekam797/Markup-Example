import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import Coin from '../../assets/svg/coin.svg';
import Settings from '../../assets/svg/settings.svg';

const Icons = (props) => (
  <img
    src={
      props.iconType === 'logo'
        ? Logo
        : props.iconType === 'coin'
        ? Coin
        : props.iconType === 'settings'
        ? Settings
        : null
    }
    alt="svg"
  />
);

export default Icons;
