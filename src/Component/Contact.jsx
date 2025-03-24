// eslint-disable-next-line no-unused-vars
import React from 'react';

const Contact = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Contact Page</h1>
      
      <section className="welcome-section">
        <h2>About This</h2>
        <p>
          This is just normal home page with some text. We are dedicated to providing exceptional services and innovative solutions
          to meet all your needs. Our team of experts works tirelessly to ensure the highest quality of service for our clients.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver outstanding value through innovative solutions and exceptional customer service. 
          We strive to exceed expectations and create lasting relationships with our clients.
        </p>
      </section>

      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your message here"></textarea>
          </div>
          
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-details">
          <p><strong>Address:</strong> Rai University, Gujarat, India</p>
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> (+91) 123-4567</p>
          <p><strong>Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
