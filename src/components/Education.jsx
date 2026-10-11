import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education & Certifications</h2>
      
      <div className="education-grid">
        <div className="edu-card glass-panel animate-fade-in">
          <div className="card-header">
            <div className="icon-wrapper">
              <GraduationCap size={24} />
            </div>
            <h3>Degree</h3>
          </div>
          <div className="edu-content">
            <h4 className="degree">B.Tech in Mechanical Engineering</h4>
            <p className="institution">Achariya College of Engineering Technology</p>
            <p className="location">Pondicherry, India</p>
            <p className="duration">08/2014 – 05/2018</p>
          </div>
        </div>

        <div className="edu-card glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card-header">
            <div className="icon-wrapper">
              <Award size={24} />
            </div>
            <h3>Certifications</h3>
          </div>
          <div className="edu-content">
            <ul className="cert-list">
              <li>React.js Essential Training</li>
              <li>Building RESTful APIs with Node.js and Express</li>
              <li>JavaScript Challenges</li>
            </ul>
          </div>
        </div>

        <div className="edu-card glass-panel animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="card-header">
            <div className="icon-wrapper">
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>A</span>
            </div>
            <h3>Languages</h3>
          </div>
          <div className="edu-content">
            <div className="lang-tags">
              <span className="lang-tag">Malayalam</span>
              <span className="lang-tag">English</span>
              <span className="lang-tag">Hindi</span>
              <span className="lang-tag">Tamil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
