// ============================================
// src/utils/parser.js
// ============================================

export const parseWhatsAppChat = (text) => {
  const lines = text.split('\n');
  const messages = [];
  
  // Regex to match WhatsApp message format: DD/MM/YYYY, HH:MM - Name: Message
  const messageRegex = /^(?:\[)?(\d{1,2}\/\d{1,2}\/\d{4}),\s(\d{1,2}:\d{2}(?:\s(?:AM|PM))?)\s?(?:\])?[-–]\s([^:]+):\s(.+)$/;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;
    
    const match = trimmedLine.match(messageRegex);
    if (match) {
      const [, date, time, sender, message] = match;
      // Skip system messages like encryption notices
      if (message.includes('Messages and calls are end-to-end encrypted')) {
        continue;
      }
      
      messages.push({
        date,
        time,
        sender: sender.trim(),
        message: message.trim(),
        id: `${date}-${time}-${sender}-${Math.random()}`
      });
    }
  }
  
  return messages;
};

export const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const date = new Date(year, month - 1, day);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  }
};

export const groupMessagesByDate = (messages) => {
  const groups = {};
  messages.forEach(message => {
    if (!groups[message.date]) {
      groups[message.date] = [];
    }
    groups[message.date].push(message);
  });
  return groups;
};
