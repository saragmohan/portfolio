import React from 'react';
import { Code, Database, Layout, Terminal, Wrench } from 'lucide-react';
import { SiOpenai, SiGooglegemini, SiGithubcopilot, SiAnthropic, SiGoogle } from 'react-icons/si';
import { VscTerminal } from 'react-icons/vsc';
import './Skills.css';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout size={24} />,
    skills: ["React.js", "JavaScript", "Redux", "HTML5", "CSS3", "Responsive UI"]
  },
  {
    title: "Backend & APIs",
    icon: <Database size={24} />,
    skills: ["Java", "Spring Boot", "Node.js", "REST APIs", "GraphQL", "Microservices", "JSON"]
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal size={24} />,
    skills: ["Git", "GitHub", "Bitbucket", "CI/CD", "GitHub Copilot", "Jira AI", "Rovo Dev CLI"]
  },
  {
    title: "Testing & Methodology",
    icon: <Wrench size={24} />,
    skills: ["Agile/Scrum", "Sprint Planning", "Code Reviews", "Jest", "JUnit"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card glass-panel animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="card-header">
              <div className="icon-wrapper">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title ai-tools-title">AI & Productivity Tools</h2>
      <div className="ai-tools-grid">
        <div className="ai-tool-card glass-panel animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <SiGithubcopilot className="ai-icon copilot-icon" />
          <span>Co-pilot</span>
        </div>
        <div className="ai-tool-card glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <SiOpenai className="ai-icon chatgpt-icon" />
          <span>Chat GPT</span>
        </div>
        <div className="ai-tool-card glass-panel animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <SiGooglegemini className="ai-icon gemini-icon" />
          <span>Gemini</span>
        </div>
        <div className="ai-tool-card glass-panel animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <VscTerminal className="ai-icon rovo-icon" />
          <span>Rovo Dev CLI</span>
        </div>
        <div className="ai-tool-card glass-panel animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <SiAnthropic className="ai-icon claw-icon" />
          <span>Claw</span>
        </div>
        <div className="ai-tool-card glass-panel animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <SiGoogle className="ai-icon antigravity-icon" />
          <span>Google Antigravity</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
