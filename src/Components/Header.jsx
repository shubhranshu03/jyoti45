import React, { useState } from 'react';
import './Header.css';
import photo from '../assets/photo.png';
import resumePDF from '../assets/shubhranshu.pdf';
import BookCallModal from './BookCallModal';

const Header = () => {
  const [isBookCallModalOpen, setIsBookCallModalOpen] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Shubhranshu_Resume.pdf';
    link.click();
  };

  const handleBookCallSubmit = async (callDetails) => {
    // Simulate successful submission
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image-container">
            <img src={photo} alt="Shubhranshu" className="profile-image" />
          </div>
          <div className="profile-info">
            <h1 className="name">Hi, I'm Shubhranshu</h1>
            <h2 className="title">Passionate Developer</h2>
            <p className="description">
              I'm constantly learning and building, focused on creating meaningful projects
              and improving my skills every day.
            </p>
            <div className="header-actions">
              <button 
                className="resume-download-btn" 
                onClick={handleResumeDownload}
              >
                <span className="download-icon">↓</span>
                Download Resume
              </button>
              <button 
                className="book-call-btn" 
                onClick={() => setIsBookCallModalOpen(true)}
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <BookCallModal 
        isOpen={isBookCallModalOpen} 
        onClose={() => setIsBookCallModalOpen(false)}
        onSubmit={handleBookCallSubmit}
      />
    </div>
  );
};

export default Header; 