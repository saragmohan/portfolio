import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg'; // Placeholder import, user will place image here
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content animate-fade-in">
        <h2 className="greeting">Hello, I'm</h2>
        <h1 className="name gradient-text">Sarag Mohan P</h1>
        <h3 className="role">Senior Software Engineer</h3>
        
        <p className="summary">
          Designing and delivering enterprise-scale, full-stack web applications.
          Passionate about building robust, scalable solutions and optimizing performance.
        </p>

        <div className="contact-info">
          <div className="info-item">
            <MapPin size={18} className="icon-accent" />
            <span>Bengaluru, India</span>
          </div>
          <div className="info-item">
            <Mail size={18} className="icon-accent" />
            <a href="mailto:saragmohan.parammal@gmail.com">saragmohan.parammal@gmail.com</a>
          </div>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com/in/saragmohanp" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/saragmohan" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      
      <div className="hero-image-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="image-wrapper glass-panel">
          <img src={profileImg} alt="Sarag Mohan P" className="profile-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400/1e1e24/6366f1?text=SM' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
