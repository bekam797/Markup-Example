import React from 'react';
import Header from '../components/Header/Header';

const Layout = (props) => (
  <div>
    <Header />
    <main>{props.children}</main>
  </div>
);

export default Layout;
