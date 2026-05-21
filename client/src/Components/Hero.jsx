import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const phrases = ["PET POOJA!", "DIL SE DESI!", "SHAHI SWAD!"];
  
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : 150);
      }
    };
    
    type();
  }, []);

  return (
    <header id="home" className="hero">
      <div className="hero-content">
        <div className="desi-badge">🔥 TANDOORI TADKA!</div>
        <h1>{text}<span className="typing-cursor">|</span></h1>
        <p>Forget dieting. Here, we serve happiness on a steel plate.</p>
        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary">Order Khana</a>
          <a href="#reservation" className="btn btn-secondary">Book Jagah</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;