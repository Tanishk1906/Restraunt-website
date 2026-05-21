import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: "Samosa Chaat", price: 120, category: "starter", desc: "Crispy samosa with chole.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80", veg: true, badge: "CHATPATA" },
  { id: 2, name: "Paneer Tikka", price: 250, category: "starter", desc: "Soft paneer cubes.", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80", veg: true, badge: "BESTSELLER" },
  { id: 3, name: "Hyderabadi Biryani", price: 300, category: "biryani", desc: "Dum-cooked basmati rice.", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80", veg: false, badge: "" },
  { id: 4, name: "Gulab Jamun", price: 80, category: "dessert", desc: "Warm sweet dumplings.", image: "https://images.unsplash.com/photo-1571328003758-4a3921f5af61?auto=format&fit=crop&w=600&q=80", veg: true, badge: "MEETHA" }
];

const Menu = ({ addToCart }) => {
  const [category, setCategory] = useState('all');

  const filteredItems = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);

  return (
    <section id="menu" className="menu-section">
      <div className="section-header">
        <h2>Shahi Menu</h2>
        <p>"Jo dikhta hai, wo bikta hai!"</p>
      </div>
      <div className="menu-tabs">
        {['all', 'starter', 'biryani', 'dessert'].map(cat => (
          <button 
            key={cat} 
            className={`tab-btn ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card visible">
            <div className={`veg-indicator ${item.veg ? 'green' : 'red'}`}></div>
            {item.badge && <span className="card-badge">{item.badge}</span>}
            <div className="card-img-placeholder" style={{backgroundImage: `url(${item.image})`}}></div>
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="price-row">
                <span className="price-tag">₹{item.price}</span>
                <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                  <i className="fas fa-plus"></i> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;