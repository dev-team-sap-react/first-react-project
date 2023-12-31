import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/ay.png';

import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='6'>
          <div className="logo footer__logo text-start">
            <img src={logo}  alt=' logo' className="mb-3 pt-4"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ipsum iusto vel cum.</p>
          </div>
        </Col>

        <Col lg='4' md='4' sm='6'>
             <h5 className='footer_title'>Kontakt</h5>
          <ListGroup className='delivery__time-list'>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <p>Adress: Irgendwo, Essenwerk-11, Hunger-DE</p>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Tel: 0123 4567890</span>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Email: email@gmail.com</span>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='4' md='4' sm='6'>
          <h5 className='footer_title'>Newsletter</h5>
          <p>Abonnieren Sie unseren Newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder='Enter your email' />
            <span><i className="ri-send-plane-fill"></i></span>
          </div>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col lg='6' md='6'>
          <p className='copyright_text' >Copyright - 2023, webseite made by ay!</p>
        </Col>
        <Col lg='6' md='6'>
          <div className="social_links d-flex align-items-center gap-4 justify-content-end">
            <p className='m-0'>Follow:</p>
            <span> <Link to='https://github.com'><i className="ri-github-fill"></i></Link></span>
            <span> <Link to='https://www.instagram.com/'><i className="ri-instagram-line"></i></Link></span>
            <span> <Link to='https://www.linkedin.com//'><i className="ri-linkedin-fill"></i></Link></span>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer;