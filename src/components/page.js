import React from 'react';
import ContactForm from './ContactForm';
import '../styles.css';

const Page = () => {
  return (
    <div className="contact-page">
      <header>
        <h1>Get in Touch with The Reading Nook</h1>
        <p>We'd love to hear from you! Whether it's book recommendations, feedback, or questions—contact us today!</p>
      </header>

      <ContactForm />

      {/* <section className="social-media">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.instagram.com/TheReadingNook" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.twitter.com/ReadNook" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.goodreads.com/TheReadingNook" target="_blank" rel="noopener noreferrer">Goodreads</a></li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>Other Ways to Reach Us</h2>
        <p>Email: info@thereadingnook.com</p>
        <p>Phone: (123) 456-7890</p>
      </section> */}
    </div>
  );
};

export default Page;
