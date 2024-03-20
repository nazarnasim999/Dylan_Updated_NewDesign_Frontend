import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import { MdLogout } from "react-icons/md";
import logo from '../../assets/HHHLogoNoBG.7732ef7fd869a56dfe16 (1).png';
// import logo from '../../assets/image__1_-removebg-preview.png';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIndexValue } from '../../store/slice/AuthSlice';

function LandingPageHeader() {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const NavigateLogin = () => {
        navigation('/mainsection')
    }
    const NavigateSignUp = () => {
        navigation('/mainSectiontwo')
    }
    return (
        <Container maxWidth="lg" className='main-container honest-30'>
        <Navbar expand="lg" style={{ backgroundColor: '#002758', color: 'white', position: 'sticky' }} className='p-1 honest-31'>
          <Navbar.Brand href="" style={{}}>
            {/* <img className='logo_img' width={300} height={"50%"} */}
            <img className='logo_img' src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle style={{ background: 'white' }} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: '20px' }} className='honest-32'>
            <Nav className='test_class honest-33'>
              <div className='header-btn honest-34'>
                <button className='head-Login honest-35' onClick={NavigateLogin}>Login</button>
                <button className='head-Register honest-36' onClick={NavigateSignUp}>Register</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      
    );
}
export default LandingPageHeader;