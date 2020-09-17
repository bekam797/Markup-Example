import React from 'react';
import Header from '../components/UI/Header/Header';

const Layout = (props) => (
  <div>
    <Header />
    <main>{props.children}</main>
  </div>
);

export default Layout;
