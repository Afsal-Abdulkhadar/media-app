import React from 'react'
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        
          <Navbar.Brand >
            <Link to={'/'} className='fs-3' style={{textDecoration: "none", color: "green"}}> 
            <img
              alt=""
              src="https://assets-v2.lottiefiles.com/a/e9c9d10a-1151-11ee-ab27-23f3dc3613bc/xSIRbieZFJ.gif"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Media Player
            </Link>
          </Navbar.Brand>
        
      </Navbar>
    </div>
  )
}

export default Header