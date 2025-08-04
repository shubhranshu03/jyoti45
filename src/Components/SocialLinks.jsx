import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialProfiles = [
    {
      name: 'LeetCode',
      username: 'shubhranshu_2003',
      url: 'https://leetcode.com/u/shubhranshu_2003/',
      icon: 'leetcode',
      color: '#FFA116'
    },
    {
      name: 'CodeChef',
      username: 'shubhranshu69',
      url: 'https://www.codechef.com/users/shubhranshu69',
      icon: 'codechef',
      color: '#5B4638'
    },
    {
      name: 'LinkedIn',
      username: 'Shubhranshu',
      url: 'https://www.linkedin.com/in/shubhranshu',
      icon: 'linkedin',
      color: '#0A66C2'
    },
    {
      name: 'WhatsApp',
      username: '8114878788',
      url: `https://wa.me/918114878788`,
      icon: 'whatsapp',
      color: '#25D366'
    },
    {
      name: 'GitHub',
      username: 'shubhranshu03',
      url: 'https://github.com/shubhranshu03',
      icon: 'github',
      color: '#333'
    },
    {
      name: 'Gmail',
      username: 'shubhranshukhatua@gmail.com',
      url: `mailto:shubhranshukhatua@gmail.com`,
      icon: 'gmail',
      color: '#EA4335'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="social-links-container">
      <div className="social-links-content">
        <h2 className="social-links-title">Connect With Me</h2>
        <p className="social-links-subtitle">Let's stay connected across platforms</p>
        
        <div className="social-links-compact">
          {socialProfiles.map((profile, index) => (
            <div 
              key={profile.name} 
              className="social-link-compact"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--hover-color': profile.color
              }}
              onClick={() => handleSocialClick(profile.url)}
            >
              <div className={`social-icon-compact ${profile.icon}`}></div>
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

export default SocialLinks; 