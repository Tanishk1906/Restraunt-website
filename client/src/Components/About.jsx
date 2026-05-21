import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          {/* Note: Always use self-closing tags in JSX */}
          <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=800&q=80" 
            alt="Indian Spices" 
          />
        </div>
        <div className="about-text">
          <h2>Our Desi Kahani</h2>
          <p>
            Started in 2010 with just two tables and one tandoor, <strong>Apna Dhaba</strong> is now a family. 
            We don't use fancy French words; we speak in flavors. Our spices are hand-ground, our ghee is pure, 
            and our love is unlimited.
          </p>
          <p>Come for the food, stay for the <em>jugaad</em> and laughter.</p>
          
          <div className="contact-card">
            <h3><i className="fas fa-map-marker-alt"></i> Visit Us</h3>
            <p>Near MANIT Campus, Bhopal, MP - 462003</p>
            <p><i className="fas fa-phone"></i> +91 98765 43210</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;