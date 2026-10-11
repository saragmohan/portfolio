import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Sarag Mohan P</h2>
          <p>Senior Software Engineer</p>
        </div>
        
        <div className="footer-contact">
          <a href="mailto:saragmohan.parammal@gmail.com" className="contact-link">
            <Mail size={18} /> saragmohan.parammal@gmail.com
          </a>
        </div>

        <div className="footer-socials">
          <a href="https://linkedin.com/in/saragmohanp" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/saragmohan" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sarag Mohan P. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
