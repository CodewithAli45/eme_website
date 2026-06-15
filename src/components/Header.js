"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800 bg-slate-950/80 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-white p-1 transition-transform group-hover:scale-105">
                <img
                  src="/eme_logo.png"
                  alt="EME Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  Electro-Mech Engineers
                </span>
                <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase flex items-center gap-1">
                  Turnkey Concepts
                  <img src="/turnkey.png" alt="Turnkey Icon" className="h-3 w-auto inline-block" />
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-amber-400 nav-link-underline">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-amber-400 nav-link-underline">
              About Us
            </Link>
            
            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-amber-400 focus:outline-none">
                <span>Projects</span>
                <svg className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-lg border border-slate-700 bg-slate-900 p-2 shadow-xl ring-1 ring-black ring-opacity-5 transition-all duration-200">
                  <Link href="/ongoing-project" className="block rounded-md px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors">
                    Ongoing
                  </Link>
                  <Link href="/completed-project" className="block rounded-md px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors">
                    Completed
                  </Link>
                </div>
              )}
            </div>

            <Link href="/career" className="text-sm font-medium text-slate-300 hover:text-amber-400 nav-link-underline">
              Careers
            </Link>
            <Link href="#contact" className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-all hover:scale-105">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block rounded-lg px-3 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block rounded-lg px-3 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400"
          >
            About Us
          </Link>
          <div className="px-3 py-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Projects</div>
            <div className="pl-4 space-y-1">
              <Link
                href="/ongoing-project"
                onClick={toggleMenu}
                className="block rounded-lg py-2 text-sm font-semibold text-slate-400 hover:text-amber-400"
              >
                Ongoing
              </Link>
              <Link
                href="/completed-project"
                onClick={toggleMenu}
                className="block rounded-lg py-2 text-sm font-semibold text-slate-400 hover:text-amber-400"
              >
                Completed
              </Link>
            </div>
          </div>
          <Link
            href="/career"
            onClick={toggleMenu}
            className="block rounded-lg px-3 py-2.5 text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-amber-400"
          >
            Careers
          </Link>
          <Link
            href="#contact"
            onClick={toggleMenu}
            className="mt-4 block rounded-full bg-amber-500 text-center py-3 text-base font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
