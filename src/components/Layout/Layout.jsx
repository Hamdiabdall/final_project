import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Fouter/Fouter';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This is where the nested routes will render */}
      </main>
      <Footer/>
      
    </div>
  );
};

export default Layout;
