import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link className='navLink' to="/" style={{ color: '#fff', marginRight: '15px', textDecoration:'none' }}>Home</Link>
      <Link className='navLink' to="/apply" style={{ color: '#fff', textDecoration:'none' }}>Apply</Link>
    </nav>
  );
};

export default Navbar;
