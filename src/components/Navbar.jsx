import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Skills', 'Education'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-brand">
        <a href="#home" className="gradient-text">Sarag Mohan P</a>
      </div>
      
      <div className="desktop-menu">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
            {link}
          </a>
        ))}
      </div>

      <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="nav-link-mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
