import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

import './Header.css'
import { useSelector } from 'react-redux'
import { useState } from 'react';

function Header() {

  const cartItems = useSelector((state) => state.cart.cartItems)
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Link to='/'><Navbar.Brand href="#home">E commerce</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'><Nav.Link href="#home">Shop</Nav.Link></Link>
            <Link to='/mens'><Nav.Link href="#link">Mens</Nav.Link></Link>
            <Link to='/womens'><Nav.Link href="#home">Womens</Nav.Link></Link>
            <Link to='/kids'><Nav.Link href="#link">Kids</Nav.Link></Link>
          </Nav>
          <div className="nav-right">
            <Link to='/login'><Button variant="outline-info">Login</Button></Link>

            <Link to='/cart'>
              <div className="cart">
                <i class="fa-solid fa-cart-shopping"></i>
                {cartItems.length > 0 ?
                  <span>{cartItems.length}</span> : <></>}
              </div>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;