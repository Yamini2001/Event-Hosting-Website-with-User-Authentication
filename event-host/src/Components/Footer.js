import React from 'react';
import './Footer.css'; // Import your CSS for Footer
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-line" /> {/* Horizontal line */}
      <div className="footer-content">
        <div className="footer-section logo-section">
          <h2 className="footer-logo">Event<span className='host1'>Host</span></h2>
          <p>Lorem Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.</p>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>Hellocompany@gmail.com</p>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>+8241102893<br />+8241102894</p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Projects</p>
          <p>Track Record</p>
          <p>Pricing</p>
          <p>services</p>
        </div>
        <div className="footer-section">
          <h3 className='follow'>Follow Us</h3>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
        <div className="footer-section">
          <h3>Media</h3>
          <p>
            Privacy Policy
          </p>
          <p>Development</p>
          <p>Terms Conditions</p>
        </div>
        <div className="footer-section">
          <h3>Pricing</h3>
          <p>
            About Project
          </p>
          <p>Management</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Event Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
