import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router

const Navbar = ({ user, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fas fa-utensils"></i> Apna Dhaba
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">Kahani</a></li>
        {user ? (
          <>
            <li><span style={{marginRight: '10px'}}>Hi, {user.email}</span></li>
            <li><button onClick={handleLogout} className="nav-btn">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login" className="nav-btn">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;