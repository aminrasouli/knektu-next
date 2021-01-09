import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = (props) => {
  return (
      <>
        <div className="main">
          <Header/>
          <Sidebar/>
          {props.children}
        </div>
        <Footer/>
      </>
  );
};

export default Layout;