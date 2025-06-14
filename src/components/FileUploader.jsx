
// ============================================
// src/components/FileUploader.jsx
// ============================================

import React, { useRef } from 'react';
import { Upload, MessageCircle } from 'lucide-react';
import { parseWhatsAppChat } from '../utils/parser';

const FileUploader = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const messages = parseWhatsAppChat(text);
        onFileUpload(messages);
      };
      reader.readAsText(file);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">WhatsApp Chat Viewer</h1>
        <p className="text-gray-600 mb-6">Upload your WhatsApp chat export to view it in a beautiful interface</p>
        
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-green-500 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">Click to upload .txt file</p>
          <p className="text-sm text-gray-400 mt-1">Only WhatsApp export files accepted</p>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default FileUploader;
