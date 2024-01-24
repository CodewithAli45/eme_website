import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className='header-container'>
        <div className="logo"><img src="eme_logo.png" width="70px" alt="EME" /><span className='co-name'>Electro-Mech Engineers</span></div>
            <ul className='navbar'>
                <li>About Us</li>
                <li>Projects</li>
                <li>Capabilities</li>
                <li>Clients</li>
                <li>Career</li>
                <li>Contacts</li>
            </ul>
    </div>
  )
}
