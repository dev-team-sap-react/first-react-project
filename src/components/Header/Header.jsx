import React from 'react';
import { Container} from 'reactstrap';
import { NavLink} from 'react-router-dom';

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
    display: 'evaluation',
    path: '/evaluation'
  },
];

const Header = () => {


  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <h5>Aa Gmbh</h5>
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