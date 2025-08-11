import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

const WebsiteLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>

      <Outlet></Outlet>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default WebsiteLayout;
