import React from 'react';
import './WorkExperience.css';
import drdoLogo from '../assets/drdo.png';
import freeResumeeLogo from '../assets/free.png';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'DRDO, PXE (Balasore)',
      position: 'Software Development Intern',
      duration: 'Internship Period',
      logo: drdoLogo,
      highlights: [
        'Developed a Radar Range Calculator using Python, enhancing accuracy and speed in range estimations',
        'Created a responsive website using ReactJS for internal stakeholders',
        'Optimized radar estimation algorithms, significantly improving processing efficiency',
        'Gained hands-on experience in defense technology applications'
      ],
      technologies: ['Python', 'ReactJS', 'Web Development']
    },
    {
      company: 'FreeResumee.com',
      position: 'Founder & Lead Developer',
      duration: 'Personal Project',
      logo: freeResumeeLogo,
      highlights: [
        'Developed a fully functional AI-powered resume builder SaaS',
        'Implemented features like template customization, section editing, and PDF export',
        'Integrated Clerk authentication for secure user login',
        'Created responsive design for mobile and desktop platforms',
        'Deployed on Vercel with performance optimizations'
      ],
      technologies: ['ReactJS', 'JavaScript', 'CSS', 'Clerk Auth', 'Vercel'],
      link: 'https://www.freeresumee.com/'
    }
  ];

  return (
    <div className="work-experience-container">
      <div className="work-experience-content">
        <h2 className="work-experience-title">Professional Journey</h2>
        <p className="work-experience-subtitle">Transforming challenges into innovative solutions</p>
        
        <div className="experiences-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company} 
              className="experience-card" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-card-inner">
                <div className="experience-header">
                  {exp.logo && (
                    <div className="company-logo-wrapper">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="company-logo" 
                      />
                    </div>
                  )}
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="position">{exp.position}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
                
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
                
                <div className="technologies-used">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {exp.link && (
                  <div className="experience-link">
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      View Project
                    </a>
                  </div>
                )}
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

export default WorkExperience; 