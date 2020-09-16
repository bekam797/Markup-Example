import React from 'react';
import Logo from '../../assets/svg/logo.svg';
import Coin from '../../assets/svg/coin.svg';
import Settings from '../../assets/svg/settings.svg';
import OnlineUser from '../../assets/svg/onlineUser.svg';
import OfflineUser from '../../assets/svg/offlineUser.svg';
import Cherrie from '../../assets/svg/cherrie.svg';
import Time from '../../assets/svg/time.svg';
import GoldCoin from '../../assets/svg/goldcoin.svg';
import Spin from '../../assets/svg/spin.svg';

const Icons = (props) => (
  <img
    src={
      props.iconType === 'logo'
        ? Logo
        : props.iconType === 'coin'
        ? Coin
        : props.iconType === 'settings'
        ? Settings
        : props.iconType === 'online'
        ? OnlineUser
        : props.iconType === 'offline'
        ? OfflineUser
        : props.iconType === 'cherrie'
        ? Cherrie
        : props.iconType === 'time'
        ? Time
        : props.iconType === 'goldcoin'
        ? GoldCoin
        : props.iconType === 'spin'
        ? Spin
        : null
    }
    className={props.iconStyle === 'online' ? 'icon' : ''}
    alt="svg"
  />
);

export default Icons;
