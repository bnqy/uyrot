import React, { useState } from 'react';

function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    // Add user message to local state
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setUserMessage('');

    // Call backend API to get AI reply
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json();

      // Append AI response to messages
      setMessages([...newMessages, { role: 'assistant', content: data.answer }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-window-header">
        <span>Homework Help</span>
        <button onClick={onClose} style={{ float: 'right', background: 'transparent', border: 'none', color: 'white' }}>
          X
        </button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} style={{ margin: '4px 0' }}>
            <strong>{msg.role === 'user' ? 'You:' : 'AI:'}</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Ask your question..."
          onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
