import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
 return (
   <nav style={{ marginBottom: '20px' }}>
     <NavLink to="/" style={{ margin: '0 10px' }}>Home</NavLink>
     <NavLink to="/About" style={{ margin: '0 10px' }}>About</NavLink>
     <NavLink to="/Dashboard" style={{ margin: '0 10px' }}>Dashboard</NavLink>
   </nav>
 );
};

export default Navbar;