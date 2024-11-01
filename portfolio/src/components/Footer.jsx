import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='foot'>
      <div className='footer-content'>
        {/* Contact Information */}
        <div className='footer-section contact'>
          <h3>Contact Me</h3>
          <p>Email: yourname@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: Your City, Your Country</p>
        </div>

        {/* Quick Links */}
        <div className='footer-section links'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href='#about'>About Me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='footer-section social'>
          <h3>Follow Me</h3>
          <div className='social-icons'>
            <a href='https://linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'><i className="bi bi-linkedin"></i></a>
            <a href='https://github.com/yourusername' target='_blank' rel='noopener noreferrer'><i className="bi bi-github"></i></a>
            <a href='https://twitter.com/yourusername' target='_blank' rel='noopener noreferrer'><i className="bi bi-twitter"></i></a>
            <a href='mailto:yourname@example.com'><i className="bi bi-envelope"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} SANJAY BASKAR. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
