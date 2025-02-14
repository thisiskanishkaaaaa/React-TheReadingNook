// About.js
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About The Reading Nook</h1>
      <p>
        The Reading Nook is an online platform designed to bring book lovers together by providing a virtual bookshelf.
        Store your favorite books, track your reading progress, and make personal notes on your reading journey.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        We aim to create a community of readers who can interact, share their thoughts, and inspire others through their love for books.
        We want to be the best tool for organizing your reading and making it an immersive experience.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Store and categorize books easily</li>
        <li>Make personal notes for each book</li>
        <li>Interactive and user-friendly UI</li>
        <li>Pagination for easy navigation through your books</li>
      </ul>

      <h2>Technologies Used</h2>
      <p>
        The Reading Nook is built using modern technologies like React.js for seamless interactivity,
        and localStorage for storing your book notes and data securely.
      </p>

      <h2>Our Future Vision</h2>
      <p>
        We're working on adding features like recommendations, community interaction, and more customizable book collections.
        Stay tuned for updates!
      </p>

      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Reach out to us at <a href="mailto:info@thereadingnook.com">info@thereadingnook.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
