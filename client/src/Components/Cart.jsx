import React from 'react';

const Cart = ({ cart, removeFromCart, total, toggleCart, placeOrder }) => {
  return (
    <div id="cart-modal" className="modal" style={{display: 'block'}}> {/* Simplified for demo */}
      <div className="modal-content">
        <div className="modal-header">
          <h2>Your Order</h2>
          <span className="close" onClick={toggleCart}>&times;</span>
        </div>
        <div className="cart-scroll-area">
          {cart.length === 0 ? <p>Cart is empty</p> : cart.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.name}</strong><br/>
                <small>₹{item.price} x {item.qty}</small>
              </div>
              <div>
                <strong>₹{item.price * item.qty}</strong>
                <i className="fas fa-trash" style={{color:'red', marginLeft:'10px', cursor:'pointer'}} onClick={() => removeFromCart(item.id)}></i>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <strong>₹{total}</strong>
          </div>
          <button className="btn btn-primary full-width" onClick={placeOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;