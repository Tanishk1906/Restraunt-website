import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
// Note: We are replacing the generic <Auth /> component with inline logic 
// to have full control over the UI design as requested.
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// Components for Main App
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import Cart from './components/Cart';
import ChatBot from './components/ChatBot';

// CSS
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState('');

  // Firebase Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCart([]);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLoginMode) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    }
  };

  // --- Cart Logic ---
  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  // --- PAGE 1: LOGIN SCREEN (Split Design) ---
  if (!user) {
    return (
      <div className="login-page-container">
        {/* Left Side: Food Glimpse */}
        <div className="login-image-side">
          <div className="login-image-overlay"></div>
          <div className="login-tagline">
            <h1>Taste the Tradition.</h1>
            <p>Authentic Indian flavors, delivered with love. Join Apna Dhaba today!</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="login-form-side">
          <div className="login-box-content">
            <div className="logo-login">
              <i className="fas fa-utensils"></i> Apna Dhaba
            </div>
            <h2>{isLoginMode ? 'Welcome Back!' : 'Create Account'}</h2>
            <p className="login-subtitle">
              {isLoginMode ? 'Enter your details to access your account.' : 'Start your culinary journey with us.'}
            </p>

            {error && <p style={{color: 'red', marginBottom: '10px'}}>{error}</p>}

            <form onSubmit={handleAuthSubmit}>
              <div className="auth-input-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              
              <div className="auth-input-group">
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>

              <button type="submit" className="auth-btn">
                {isLoginMode ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <p className="toggle-auth-mode">
              {isLoginMode ? "New here? " : "Already have an account? "}
              <span onClick={() => {
                setIsLoginMode(!isLoginMode);
                setError('');
              }}>
                {isLoginMode ? 'Create an Account' : 'Login Here'}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- PAGE 2: MAIN APP (Menu, Booking, Chatbot) ---
  return (
    <div className="main-app-container">
      <Navbar user={user} handleLogout={handleLogout} />
      
      <main>
        <Hero />
        <Menu addToCart={addToCart} />
        <About />
        <Reservation />
      </main>

      {/* Floating Cart Button */}
      <div className="cart-float" onClick={() => setIsCartOpen(true)}>
        <i className="fas fa-shopping-bag"></i>
        <span id="cart-count">{cartCount}</span>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <Cart 
          cart={cart} 
          removeFromCart={removeFromCart} 
          total={total} 
          toggleCart={() => setIsCartOpen(false)} 
          placeOrder={() => {
            alert('Order Placed Successfully! Kitchen mein chala gaya! 👨');
            setCart([]);
            setIsCartOpen(false);
          }}
        />
      )}

      {/* AI Chat Bot */}
      <ChatBot />
      
      <footer>
        <p>&copy; 2026 Apna Dhaba. Crafted with ❤️ and lots of Ghee.</p>
      </footer>
    </div>
  );
}

export default App;