import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
        <div className="header-left">
            <Link to="/" className='link'>
                <img src="eme_logo.png" alt="Company Logo" className="logo" />
                <div className="co-detail">
                    <span className="company-name">Electro-Mech Engineers</span>
                    <img src="turnkey.png" alt="Turnkey Concept" />
                </div>
            </Link>
        </div>
        <div className="header-right">
            <Link to="/about" className="nav-link about">About Us</Link>
            <Link to="/project" className="nav-link projects">Projects</Link>
            <Link to="/career" className="nav-link careers">Careers</Link>
            <Link to="/" className="nav-link contacts">Contacts</Link>
        </div>
    </header>
  )
}
