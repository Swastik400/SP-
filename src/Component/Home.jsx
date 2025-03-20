import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      
      <section className="welcome-section">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing exceptional services and innovative solutions
          to meet all your needs. Our team of experts works tirelessly to ensure
          the highest quality standards in everything we do.
        </p>
      </section>

      <section className="features-section">
        <h2>What We Offer</h2>
        <p>
          Discover our wide range of services designed to help you achieve your goals.
          From cutting-edge technology solutions to personalized customer support,
          we're here to make your experience outstanding.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower our clients with the tools and knowledge they
          need to succeed. We believe in building lasting relationships and
          delivering value through innovation and excellence.
        </p>
      </section>
    </div>
  );
};

export default Home;
