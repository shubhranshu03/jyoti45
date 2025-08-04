import React, { useState } from 'react';
import './BookCallModal.css';

const BookCallModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !date || !time) {
      alert('Please fill in all fields');
      return;
    }

    const callDetails = {
      name,
      email,
      date,
      time,
      message,
      timestamp: new Date().toISOString()
    };

    try {
      const result = await onSubmit(callDetails);
      
      // If submission is successful, set the submission status
      if (result) {
        setSubmissionStatus({
          success: true,
          name: name
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const handleClose = () => {
    // Reset form and submission status when closing
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setMessage('');
    setSubmissionStatus(null);
    onClose();
  };

  if (!isOpen) return null;

  // Render success message
  if (submissionStatus && submissionStatus.success) {
    return (
      <div className="book-call-modal-overlay">
        <div className="book-call-modal success-modal">
          <button className="modal-close-btn" onClick={handleClose}>×</button>
          <div className="success-content">
            <h2>Request Received!</h2>
            <p>Hi {submissionStatus.name}! 👋</p>
            <p>Thank you for booking a call with me. I'll review your request and get back to you shortly.</p>
            <div className="success-details">
              <p>I'm excited to connect and discuss how I can help you achieve your goals!</p>
              <button onClick={handleClose} className="close-success-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-call-modal-overlay">
      <div className="book-call-modal">
        <button className="modal-close-btn" onClick={handleClose}>×</button>
        <h2>Book a Call</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Preferred Date</label>
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Preferred Time</label>
            <input 
              type="time" 
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Additional Message (Optional)</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any specific topics or requirements?"
            />
          </div>
          
          <button type="submit" className="submit-call-request">
            Request Call
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookCallModal; 