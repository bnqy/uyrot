import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react";
import ReactMarkdown from "react-markdown"; // ✅ Import Markdown renderer

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Салам! Мен, AI жардамчы, сенин үй тапшырмаларыңа жардам бере алам!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Open/close chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  // Minimize/maximize chat
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Scroll to the bottom
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Whenever messages change (or window toggles), scroll down & focus input
  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isOpen, isMinimized, messages]);

  // Handle typing in input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle user sending a message
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // User's message
    const userMessage = {
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Call backend to get AI reply
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error(`Error from server: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse =
        typeof data.reply === "string"
          ? data.reply
          : "Кечирип кой, кичине күтүп турсаң мен суроолоруңа жооп берем.";

      const botMessage = {
        text: aiResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      // If error, show a fallback response
      const botMessage = {
        text: "Ой-ой! Бир нерсе туура эмес болуп калды. Кайра аракет кылып көрчү!",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }

    setIsTyping(false);
  };

  // Format timestamp
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Floating button (if chat is closed) */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="relative w-20 h-20 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center border-4 border-dashed border-blue-400"
          aria-label="Open chat assistant"
        >
          {/* <MessageCircle size={24} /> */}
          <video
            src="https://euler-storage.web.app/assets/chat-c4537780.mp4" // ✅ Change to your video URL
            autoPlay
            loop
            muted
            className="w h object-cover rounded-full"
          />
        </button>
      )}

      {/* Chat window (if open) */}
      {isOpen && (
        <div
          className={`bg-white rounded-lg shadow-xl transition-all duration-300 flex flex-col ${
            isMinimized ? "w-64 h-12" : "w-80 sm:w-96 h-[450px]"
          }`}
        >
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-medium">AI жардамчы</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="text-white hover:text-blue-200"
              >
                {isMinimized ? (
                  <Maximize2 size={18} />
                ) : (
                  <Minimize2 size={18} />
                )}
              </button>
              <button
                onClick={toggleChat}
                className="text-white hover:text-blue-200"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat content (hidden if minimized) */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-4 flex ${
                      msg.isBot ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.isBot
                          ? "bg-gray-100 text-gray-800"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                      <p
                        className={`text-xs mt-1 ${
                          msg.isBot ? "text-gray-500" : "text-blue-100"
                        }`}
                      >
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input field */}
              <form onSubmit={handleSubmit} className="border-t p-3 flex">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Үй иши боюнча жардам сура..."
                  className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 transition-colors duration-300"
                >
                  <Send size={18} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatBot;
