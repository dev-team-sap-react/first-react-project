import React from 'react';
import { Container} from 'reactstrap';
import { NavLink} from 'react-router-dom';

import logo from '../../assets/ay.png';
import './header.css';

const nav_links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Rawdata',
    path: '/rawData'
  },
  {
    display: 'Evaluation',
    path: '/evaluation'
  },
  {
    display: 'ApexChart',
    path: '/apexchart'
  },
];

const Header = () => {


  return (
    <header className="header">
      <Container>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <div className="logo">
              <img src={logo} 
                  style={{width:'50px'}} alt=' logo' />
              <h5>Consulting People Gmbh</h5>
          </div>
      
{/* ==================  menu ================= */}

        <div className="navigation">
          <div className="menu d-flex align-items-center gap-5">
            {
              nav_links.map((item,index)=>(
                <NavLink to={item.path} key={index} 
                  className={navClass => navClass.isActive ? 'active_menu' : ' '}>
                  {item.display}
                </NavLink>
              ))
            }
          </div>
        </div>
        </div>

      </Container>
    </header>
  )
}

export default Header;