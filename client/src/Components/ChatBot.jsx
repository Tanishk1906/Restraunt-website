import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Namaste! 🙏 How can I help?", sender: 'bot' }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    
    // Simple bot logic
    setTimeout(() => {
      let reply = "Sorry, I didn't get that.";
      if (input.toLowerCase().includes('spicy')) reply = "Try our Hyderabadi Biryani! 🔥";
      if (input.toLowerCase().includes('sweet')) reply = "Gulab Jamun is a must! 🍬";
      setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    }, 600);
    
    setInput('');
  };

  return (
    <>
      <div className="cart-float" style={{bottom: '110px', background: '#1a237e', color: 'white'}} onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-robot"></i>
      </div>
      {isOpen && (
        <div className="modal" style={{display: 'block', zIndex: 2500}}>
          <div className="modal-content" style={{position: 'fixed', bottom: '170px', right: '30px', width: '350px', margin: 0}}>
            <div className="modal-header" style={{background: '#ff9933', color: '#1a237e'}}>
              <h3>AI Waiter</h3>
              <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            </div>
            <div style={{height: '300px', padding: '15px', overflowY: 'auto', background: '#fff8e1'}}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{padding: '10px', borderRadius: '15px', marginBottom: '10px', background: msg.sender === 'bot' ? 'white' : '#1a237e', color: msg.sender === 'bot' ? '#333' : 'white', alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end', maxWidth: '80%'}}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div style={{display: 'flex', padding: '10px', background: 'white'}}>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask..." style={{flex: 1, padding: '10px', borderRadius: '20px', border: '1px solid #ddd'}} />
              <button onClick={sendMessage} style={{background: '#1a237e', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', marginLeft: '10px'}}><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;