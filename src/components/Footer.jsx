import React from 'react';
import { Mail, Phone, FileDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const handleDownloadPdf = () => {
    const pdfUrl = `${import.meta.env.BASE_URL}Sarag_Mohan_Portfolio.pdf`;
    fetch(pdfUrl, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = 'Sarag_Mohan_Portfolio.pdf';
          link.click();
        } else {
          window.print();
        }
      })
      .catch(() => {
        window.print();
      });
  };

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

        <div className="footer-actions">
          <button onClick={handleDownloadPdf} className="download-pdf-btn" title="Download or Save Portfolio as PDF">
            <FileDown size={18} />
            <span>Download Portfolio (PDF)</span>
          </button>
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
