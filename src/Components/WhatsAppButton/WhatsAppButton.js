import React, { useState } from 'react';
import './WhatsAppButton.css'; // Import CSS for animations
import { GiCancel } from "react-icons/gi";

const WhatsAppPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [message, setMessage] = useState('');

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const sendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/7004352722?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="nav-bottom">
      <div className={`popup-whatsapp ${isPopupOpen ? 'is-active-whatsapp-popup' : ''}`}>
        <div className="content-whatsapp -top">
          <button type="button"  onClick={togglePopup}>
              <GiCancel/>
          </button>
          <p>Hello, 😊 need help?</p>
        </div>
        <div className="content-whatsapp -bottom">
          <input
            className="whats-input"
            type="text"
            placeholder="Send message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-msPopup" type="button" onClick={sendMessage}>
            <i className="material-icons icon-font-color--black">send</i>
          </button>
        </div>
      </div>
      <button type="button" className="whatsapp-button" onClick={togglePopup}>
        <img className="icon-whatsapp" src="https://cdn-icons-png.flaticon.com/512/134/134937.png" alt="WhatsApp" />
      </button>
      <div className="circle-anime"></div>
    </div>
  );
};

export default WhatsAppPopup;
