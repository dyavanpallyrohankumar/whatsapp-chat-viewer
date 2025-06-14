
// ============================================
// src/components/MessageBubble.jsx
// ============================================

import React from 'react';

const MessageBubble = ({ message, isUser }) => {
  const isMediaOmitted = message.message.includes('<Media omitted>') || 
                        message.message.includes('‎image omitted') || 
                        message.message.includes('‎video omitted');
  
  return (
    <div className={`flex mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
        isUser 
          ? 'bg-green-100 text-gray-800' 
          : 'bg-white text-gray-800 shadow-sm'
      }`}>
        {!isUser && (
          <p className="text-xs font-semibold text-green-600 mb-1">{message.sender}</p>
        )}
        
        {isMediaOmitted ? (
          <div className="flex items-center text-gray-500 italic">
            <span className="text-sm">📎 Media omitted</span>
          </div>
        ) : (
          <p className="text-sm leading-relaxed break-words">{message.message}</p>
        )}
        
        <p className={`text-xs mt-1 ${isUser ? 'text-gray-600' : 'text-gray-500'} text-right`}>
          {message.time}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
