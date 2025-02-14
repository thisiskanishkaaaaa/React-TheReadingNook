// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaGoodreads } from 'react-icons/fa'; // Social Media Icons


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h3>The Reading Nook</h3>
          <p>Your go-to place for book lovers.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/About">About</a></li>
            <li><a href="/BookShelf">BookShelf</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.instagram.com/TheReadingNook" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a></li>
            <li><a href="https://www.twitter.com/ReadNook" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a></li>
            <li><a href="https://www.facebook.com/TheReadingNook" target="_blank" rel="noopener noreferrer"><FaFacebookF size={24} /></a></li>
            <li><a href="https://www.goodreads.com/TheReadingNook" target="_blank" rel="noopener noreferrer"><FaGoodreads size={24} /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 The Reading Nook. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
