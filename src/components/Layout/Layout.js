import React from 'react';
import Header from '../Header/Header';
//import Footer from '../Footer/Footer.jsx';
import Routers from '../../routes/Routers';


const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
        <Routers/>
        </div>
    </div>    
  );
};

export default Layout;