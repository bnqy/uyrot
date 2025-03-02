import React, { useState } from 'react';
import ChatWindow from './ChatWindow'; // This will be the expanded chat box

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* The floating chat icon */}
      <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        {/* Could be a speech-bubble icon, chatbot icon, etc. */}
        <span>AI</span>
      </div>

      {/* The actual chat window, conditionally rendered */}
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default ChatWidget;
