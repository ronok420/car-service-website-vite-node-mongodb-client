import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharePages/Footer/Footer';
import Navbar from '../Pages/SharePages/Navbar/Navbar';

const Main = () => {
    return (
        <div >
  
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;