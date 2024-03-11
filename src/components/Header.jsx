import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isNavbar, setIsNavbar] = useState(true);

    const toggleNavbar = () => {
        setIsNavbar(!isNavbar);
    }
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
        <div className={`header-right`}>
            <div className='responsice-menu' onClick={toggleNavbar}>
                <img src="iconmenu.png" alt="Icon Menu" width='40px' height='30px' />
            </div>
            <div className={`nav-links-res ${isNavbar ? 'open' : ''}`}>
                <Link to="/" className="nav-link-res contacts">Home</Link>
                <Link to="/about" className="nav-link-res about">About Us</Link>
                <Link to="/project" className="nav-link-res projects">Projects</Link>
                <Link to="/career" className="nav-link-res careers">Careers</Link>
                <Link to="/" className="nav-link-res contacts">Contacts</Link>
            </div>

            <div className="nav-links">
                <Link to="/" className="nav-link home">Home</Link>
                <Link to="/about" className="nav-link about">About Us</Link>
                <div className="nav-link projects">
                    <span>Projects</span>
                    <div className="dropdown">
                        <Link to="/ongoing-project" className="dropdown-link">Ongoing</Link>
                        <Link to="/completed-project" className="dropdown-link">Completed</Link>
                    </div>
                </div>
                <Link to="/career" className="nav-link careers">Careers</Link>
                <Link to="/" className="nav-link contacts">Contacts</Link>
            </div>
        </div>
    </header>
  )
}
