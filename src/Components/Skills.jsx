import React from 'react';
import './Skills.css';
import reactIcon from '../assets/react.png';
import javascriptIcon from '../assets/javscript.png';
import javaIcon from '../assets/java.png';
import sqlIcon from '../assets/sql11.png';
import tailwindIcon from '../assets/tailwnd.png';
import pythonIcon from '../assets/python.jpg';
import cssIcon from '../assets/css.png';
import htmlIcon from '../assets/html.png';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      icon: htmlIcon,
      description: 'Creating structured and semantic web content'
    },
    {
      name: 'CSS',
      icon: cssIcon,
      description: 'Styling and animating web interfaces with modern CSS'
    },
    {
      name: 'JavaScript',
      icon: javascriptIcon,
      description: 'Building dynamic and interactive web applications'
    },
    {
      name: 'React',
      icon: reactIcon,
      description: 'Developing modern and responsive user interfaces'
    },
    {
      name: 'Python',
      icon: pythonIcon,
      description: 'Building backend services and data analysis'
    },
    {
      name: 'Java',
      icon: javaIcon,
      description: 'Creating robust backend applications'
    },
    {
      name: 'SQL',
      icon: sqlIcon,
      description: 'Database design and efficient queries'
    },
    {
      name: 'Tailwind CSS',
      icon: tailwindIcon,
      description: 'Rapid UI development with utility classes'
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-content">
        <h2 className="skills-title">Technical Expertise</h2>
        <p className="skills-subtitle">Transforming ideas into reality with modern technologies</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-card-inner">
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default Skills; 