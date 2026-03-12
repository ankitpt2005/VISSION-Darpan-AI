import React, { useState } from 'react';

const ChatSection = () => {
  const [inputText, setInputText] = useState('');
  
  // Dummy Chat Messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! Did the municipality fix the streetlight in Sector 14?", sender: "other", time: "10:30 AM" },
    { id: 2, text: "Yes! I just crossed that street, it's fully lit now. 💡", sender: "me", time: "10:32 AM" },
    { id: 3, text: "Awesome! Thanks for the update. I'll close the issue.", sender: "other", time: "10:33 AM" },
    { id: 4, text: "No problem! We did it together. 🙌", sender: "me", time: "10:35 AM" }
  ]);

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className="bg-[#0f0f13] min-h-screen flex flex-col font-sans text-white">
      
      {/* 🔝 HEADER SECTION */}
      <div className="bg-[#1a1a24] px-4 py-4 rounded-b-3xl shadow-md sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition text-xl p-2">⬅️</button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="https://i.pravatar.cc/150?img=47" 
                alt="User" 
                className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover"
              />
              {/* Online indicator dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1a1a24] rounded-full"></span>
            </div>
            <div>
              <h2 className="text-base font-bold text-white leading-tight">Civic Helper</h2>
              <p className="text-xs text-green-400 font-medium">Online</p>
            </div>
          </div>
        </div>
        <button className="text-gray-400 text-xl p-2">⋮</button>
      </div>

      {/* 🗨️ CHAT AREA (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 scrollbar-hide">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
          >
            {/* Message Bubble */}
            <div 
              className={`max-w-[75%] px-4 py-3 text-sm shadow-sm ${
                msg.sender === 'me' 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl rounded-br-sm' 
                  : 'bg-[#2a2a36] text-gray-100 rounded-2xl rounded-bl-sm border border-gray-800'
              }`}
            >
              {msg.text}
            </div>
            {/* Timestamp */}
            <span className="text-[10px] text-gray-500 mt-1 px-1">
              {msg.time}
            </span>
          </div>
        ))}
      </div>

      {/* ✍️ INPUT AREA (Sticky Bottom) */}
      <div className="bg-[#1a1a24] border-t border-gray-800 p-4 fixed bottom-0 w-full rounded-t-3xl">
        <div className="flex items-center gap-3 bg-[#0f0f13] rounded-full pl-4 pr-2 py-2 border border-gray-800">
          <button className="text-gray-400 hover:text-purple-400 text-xl transition">📎</button>
          <input
            type="text"
            className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-gray-500"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            onClick={handleSendMessage}
            className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full text-white transition shadow-lg flex items-center justify-center w-10 h-10"
          >
            ➤
          </button>
        </div>
      </div>

    </div>
  );
};

export default ChatSection;