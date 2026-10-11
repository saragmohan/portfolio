import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content glass-panel animate-fade-in">
        <p>
          I am a <strong>Senior Software Engineer</strong> with over 5+ years of experience designing and delivering enterprise-scale, full-stack web applications. My technical toolkit centers around <strong>React.js</strong>, <strong>Java (Spring Boot)</strong>, <strong>GraphQL</strong>, and modern microservice architectures.
        </p>
        <p>
          Throughout my career, I've demonstrated a proven ability to propose and implement robust, scalable backend and frontend solutions while significantly optimizing application performance. I am adept at cross-functional collaboration in Agile environments, leveraging CI/CD pipelines and advanced AI tools like GitHub Copilot to accelerate the development lifecycle.
        </p>
        <p>
          Whether it's building reusable UI components, migrating services to GraphQL, or collaborating with global clients to solve complex problems, I strive for excellence, scalability, and an intuitive user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
