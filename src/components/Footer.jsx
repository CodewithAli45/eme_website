import React from 'react'
import './Footer.css';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footers() {
  return (
    <Footer bgDark className="my-2">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Electro-Mech Engineers" />
            <Footer.LinkGroup col className="text-lg">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Projects</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contacts" />
            <Footer.LinkGroup col>
              <Footer.Link href="#"><span >Electro-Mech Engineers</span>, Jain Ice Factory Compound, Main Road, Chas, Bokaro, Jharkhand</Footer.Link>
              <Footer.Link href="#">Office: KB - 8, City Center, Sector - 4, Bokaro Steel City, Jharkhand</Footer.Link>
              <Footer.Link href="#">Phone: +91 9334212890</Footer.Link>
              <Footer.Link href="#">Email: electro_mech@yahoo.com</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Electro-Mech Engineers™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <div className="text-sm text-slate-800">Page Manged by: <span className="text-pink-900 italic">Ali Murtaza</span></div>
          </div>
        </div>
      </div>
    </Footer>
  )
}
