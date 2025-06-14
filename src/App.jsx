import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ChatViewer from './components/ChatViewer';
import Footer from './components/Footer';
import './App.css';
import { Analytics } from "@vercel/analytics/next"

const App = () => {
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  const handleFileUpload = (parsedMessages) => {
    setMessages(parsedMessages);
    setShowChat(true);
  };

  const handleBack = () => {
    setShowChat(false);
    setMessages([]);
  };

  return (
    <div className="flex flex-col max-h-screen">
      <div className="flex-grow">
        {!showChat ? (
          <FileUploader onFileUpload={handleFileUpload} />
        ) : (
          <ChatViewer messages={messages} onBack={handleBack} />
        )}
      </div>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
