
import React, { useState, useRef, useEffect } from 'react';
import { Search, Calendar } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { formatDate, groupMessagesByDate } from '../utils/parser';

const ChatViewer = ({ messages, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchIndices, setMatchIndices] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState('');

  const chatEndRef = useRef(null);
  const messageRefs = useRef({});

  const groupedMessages = groupMessagesByDate(messages);

  // Automatically detect current user (most frequent sender)
  useEffect(() => {
    const senderCounts = {};
    messages.forEach(msg => {
      senderCounts[msg.sender] = (senderCounts[msg.sender] || 0) + 1;
    });

    const mostFrequentSender = Object.entries(senderCounts)
      .sort(([, a], [, b]) => b - a)[0]?.[0];

    setCurrentUser(mostFrequentSender);
  }, [messages]);

  // Track matching messages when search term changes
  useEffect(() => {
    if (!searchTerm) {
      setMatchIndices([]);
      setCurrentMatchIndex(0);
      return;
    }

    const term = searchTerm.toLowerCase();
    const indices = messages
      .map((msg, index) =>
        msg.message.toLowerCase().includes(term) || msg.sender.toLowerCase().includes(term)
          ? index
          : null
      )
      .filter((index) => index !== null);

    setMatchIndices(indices);
    setCurrentMatchIndex(0);
  }, [searchTerm, messages]);

  // Scroll to the current match
  useEffect(() => {
    if (matchIndices.length > 0) {
      const matchedMessage = messages[matchIndices[currentMatchIndex]];
      const el = messageRefs.current[matchedMessage.id];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentMatchIndex, matchIndices, messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-500 text-white p-2 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="mr-3 hover:bg-green-600 p-1 rounded-full transition-colors"
            >
              ←
            </button>
            <h2 className="text-lg font-semibold">WhatsApp Chat</h2>
            <span className="ml-2 text-sm opacity-75">({messages.length} messages)</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-30 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && matchIndices.length > 0) {
                setCurrentMatchIndex((prev) => (prev + 1) % matchIndices.length);
              }
            }}
            className="w-full pl-10 pr-4 py-0 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {searchTerm && matchIndices.length > 0 && (
          <div className="text-center text-sm text-white mt-1">
            Match {currentMatchIndex + 1} of {matchIndices.length}
          </div>
        )}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {Object.entries(groupedMessages).map(([date, dateMessages]) => (
          <div key={date}>
            {/* Date Separator */}
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {formatDate(date)}
              </div>
            </div>

            {/* Messages for this date */}
            {dateMessages.map((message) => {
              const index = messages.indexOf(message);
              const isMatch = searchTerm && matchIndices.includes(index);
              const isActiveMatch = searchTerm && matchIndices[currentMatchIndex] === index;

              return (
                <div
                  key={message.id}
                  ref={(el) => (messageRefs.current[message.id] = el)}
                  className={
                    isActiveMatch
                      ? 'bg-yellow-300 rounded-lg p-1'
                      : isMatch
                      ? 'bg-yellow-100 rounded-lg p-1'
                      : ''
                  }
                >
                  <MessageBubble
                    message={message}
                    isUser={message.sender === currentUser}
                  />
                </div>
              );
            })}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
};

export default ChatViewer;
