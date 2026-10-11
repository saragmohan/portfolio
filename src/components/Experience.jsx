import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "IBS Software",
    location: "Bengaluru, India",
    duration: "02/2022 – present",
    responsibilities: [
      "Contributed to full-stack development by creating and integrating APIs using Spring Boot microservices with new React UI screens, ensuring efficient client-server communication.",
      "Built and maintained a scalable library of reusable UI components using React.js, ensuring cross-browser compatibility and UI consistency.",
      "Spearheaded the development of modular and responsive React.js frontends and led performance tuning, resulting in a documented 40% reduction in load times.",
      "Migrated existing features to GraphQL-based services, optimizing data efficiency and simplifying client-side data handling.",
      "Collaborated with global customers (e.g., China Airlines, Qantas, Air Arabia) to propose robust, scalable solutions using Java and React.js.",
      "Actively employed AI-powered tools like GitHub Copilot and Jira AI to accelerate development workflows.",
      "Implemented automated UI and functional testing using Jest, contributing to high reliability before CI/CD deployments."
    ]
  },
  {
    id: 2,
    role: "Market Research Executive",
    company: "Silicon Media Technologies Pvt Ltd",
    location: "Bangalore, India",
    duration: "10/2019 – 10/2021",
    responsibilities: [
      "Managed and deployed time-sensitive digital content updates, including configuring web banner placements and updating event listings.",
      "Demonstrated early exposure to content management, live production environments, and team collaboration."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-marker">
              <div className="marker-icon"><Briefcase size={16} /></div>
              {index !== experiences.length - 1 && <div className="marker-line"></div>}
            </div>
            
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <div>
                  <h3 className="role">{exp.role}</h3>
                  <h4 className="company">{exp.company} | {exp.location}</h4>
                </div>
                <div className="duration">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
              </div>
              
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
