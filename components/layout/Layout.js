import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = (props) => {
  return (
      <>
        <Header/>
        <Sidebar/>
        {props.children}
        <Footer/>
      </>
  );
};

export default Layout;