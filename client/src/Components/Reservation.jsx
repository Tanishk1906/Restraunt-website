import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: ''
  });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Booking Data:", formData);
    
    // Yahan baad mein API call ayegi
    setSuccessMsg("Booking Confirmed! See you soon! 🙏");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSuccessMsg('');
      setFormData({ name: '', phone: '', date: '', guests: '' });
    }, 3000);
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-box">
        <div className="res-text">
          <h2>Book Your Jagah</h2>
          <p>Planning a party? Or just craving some good food? Reserve your spot now and get free Masala Chai on arrival!</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name (Naam)" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <input 
              type="tel" 
              id="phone" 
              placeholder="Phone Number (Mobile)" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <input 
                type="date" 
                id="date" 
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <select 
                id="guests" 
                value={formData.guests}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Kitne Log?</option>
                <option value="2">2 People</option>
                <option value="4">4 People</option>
                <option value="6">6+ People</option>
              </select>
            </div>
          </div>
          
          <button type="submit" className="submit-btn">Confirm Booking</button>
          
          {successMsg && <p className="success-msg" style={{display: 'block'}}>{successMsg}</p>}
        </form>
      </div>
    </section>
  );
};

export default Reservation;