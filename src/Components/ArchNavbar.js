import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArchNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'PORTFOLIO', path: '/project' },
    { name: 'BLUEPRINTS', path: '/blueprints' },
  ];

  const customStyles = `
    .navbar-dark {
      background-color: #111827 !important;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .nav-link {
      position: relative;
      color: #D1D5DB !important;
      font-size: 0.875rem;
      margin: 0 1rem;
      transition: color 0.3s;
    }
    .nav-link:hover {
      color: #ffffff !important;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #3B82F6;
      transition: width 0.3s;
    }
    .nav-link:hover::after {
      width: 100%;
    }
    .navbar-brand {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: -0.025em;
    }
    .auth-button {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 0.375rem;
      transition: all 0.3s;
    }
    .login-button {
      color: #D1D5DB;
      background: transparent;
      border: none;
    }
    .login-button:hover {
      color: #ffffff;
    }
    .signup-button {
      background-color: #3B82F6;
      color: white;
      border: none;
    }
    .signup-button:hover {
      background-color: #2563EB;
    }
    @media (max-width: 768px) {
      .mobile-menu {
        padding: 1rem;
        border-top: 1px solid #374151;
      }
      .nav-link {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <Navbar variant="dark" expand="md" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <span className="text-white">Arch</span>
            <span className="text-primary">X</span>
            <svg className="ms-2" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21V17.8C3 16.1198 4.35984 14.76 6.04 14.76H18.96C20.6402 14.76 22 16.1198 22 17.8V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 3L2 14H22L12 3Z" fill="currentColor"/>
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            onClick={() => setIsOpen(!isOpen)}
          />
          <Navbar.Collapse id="navbar-nav" in={isOpen}>
            <Nav className="mx-auto">
              {navItems.map((item) => (
                <Nav.Link as={Link} key={item.name} to={item.path} className="text-uppercase">
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="d-flex align-items-center">
              <Link to="/login">
                <button className="auth-button login-button me-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="auth-button signup-button">
                  Sign Up
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ArchNavbar;
