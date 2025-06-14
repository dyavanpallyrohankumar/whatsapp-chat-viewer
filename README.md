# 💬 WhatsApp Chat Viewer

A beautiful, feature-rich React.js application that transforms your WhatsApp chat exports into an elegant, interactive interface that mimics the original WhatsApp experience — with search, highlights, smooth navigation, and full privacy.

🔗 **Live Website**: [https://dyavanpallyrohankumar.github.io/whatsapp-chat-viewer](https://dyavanpallyrohankumar.github.io/whatsapp-chat-viewer)

---

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---
## ✨ Features

### 🎯 Core Functionality
- **📁 File Upload**: Drag-and-drop interface for WhatsApp `.txt` exports
- **🧠 Smart Parser**: Intelligent parsing of WhatsApp chat formats
- **💬 Authentic UI**: WhatsApp-style message bubbles and layout
- **📅 Date Grouping**: Messages organized by date with smart separators
- **🔍 Search**: Real-time message and sender filtering
- **📱 Responsive**: Perfect on desktop, tablet, and mobile

### 🎨 Visual Excellence
- **Green & White Bubbles**: Authentic WhatsApp color scheme
- **Smooth Animations**: Subtle transitions and hover effects
- **Clean Typography**: Optimized readability
- **Modern Icons**: Beautiful Lucide React icons
- **Custom Scrollbar**: Styled scroll areas

### 🚀 Advanced Features
- **Auto User Detection**: Automatically identifies the current user
- **Media Placeholder Support**: Handles "Media omitted" messages
- **Message Counter**: Shows total message count
- **Emoji Support**: Full Unicode emoji rendering
- **System Message Filtering**: Removes encryption notices
- **No Backend Required**: 100% client-side processing

## 🛠️ Tech Stack

- **Frontend**: React 18.2+ with Hooks
- **Styling**: Tailwind CSS 3.3+
- **Icons**: Lucide React
- **Build Tool**: Vite (recommended) or Create React App
- **Language**: JavaScript (ES6+)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Basic knowledge of React

### Installation

#### Option 1: Using Vite (Recommended)
```bash
# Create new Vite project
npm create vite@latest whatsapp-chat-viewer -- --template react
cd whatsapp-chat-viewer

# Install dependencies
npm install lucide-react

# Install and setup Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Option 2: Using Create React App
```bash
# Create new CRA project
npx create-react-app whatsapp-chat-viewer
cd whatsapp-chat-viewer

# Install dependencies
npm install lucide-react

# Install and setup Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Setup Tailwind CSS

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## 📸 Screenshot

![App Preview](./src/assets/Screenshot%202025-06-14%20at%2011.41.50%20PM.png)

---
### Project Structure
```
src/
├── components/
│   ├── FileUploader.jsx      # File upload interface
│   ├── ChatViewer.jsx        # Main chat display
│   ├── Footer.jsx            # Footer component
│   └── MessageBubble.jsx     # Individual message component
├── utils/
│   └── parser.js             # WhatsApp chat parsing logic
├── App.jsx                   # Main application component
├── App.css                   # Additional styles
├── index.css                 # Tailwind imports
└── main.jsx                  # Application entry point
```

### Run the Application
```bash
# Development server
npm run dev          # For Vite
npm start           # For Create React App

# Build for production
npm run build

# Preview production build
npm run preview     # For Vite only
```

## 📖 Usage

### 1. Export WhatsApp Chat
1. Open WhatsApp on your phone
2. Go to the chat you want to export
3. Tap the three dots menu → More → Export chat
4. Choose "Without Media" to get a `.txt` file
5. Send the file to your computer

### 2. Upload and View
1. Open the WhatsApp Chat Viewer
2. Click the upload area or drag your `.txt` file
3. The chat will automatically parse and display
4. Use the search bar to find specific messages
5. Scroll through your conversation history

### Supported Chat Formats
The parser handles multiple WhatsApp export formats:
- `DD/MM/YYYY, HH:MM - Name: Message`
- `[DD/MM/YYYY, HH:MM AM/PM] Name: Message`
- International date formats
- Various timezone formats

## 🎯 Component Architecture

### FileUploader Component
- Handles file input and drag-and-drop
- Validates file type (`.txt` only)
- Triggers parsing when file is selected
- Beautiful upload interface with icons

### ChatViewer Component
- Main chat display interface
- Manages search functionality
- Handles user detection
- Groups messages by date
- Responsive header with message count

### MessageBubble Component
- Individual message rendering
- Handles user vs. other styling
- Displays timestamps and sender names
- Supports media omitted messages

### Parser Utility
- Robust regex-based parsing
- Handles multiple chat formats
- Filters system messages
- Creates unique message IDs

## 🎨 Customization

### Colors
```css
/* User messages */
.bg-green-100 { background-color: #dcf8c6; }

/* Other messages */
.bg-white { background-color: #ffffff; }

/* Header */
.bg-green-500 { background-color: #10b981; }
```

### Message Bubble Styling
```css
/* Bubble shapes */
.rounded-lg { border-radius: 0.5rem; }

/* Shadows */
.shadow-sm { box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }
```

## 🔧 Advanced Configuration

### Custom Date Formats
Modify the `formatDate` function in `utils/parser.js`:
```javascript
export const formatDate = (dateString) => {
  // Your custom date formatting logic
};
```

### Message Filtering
Extend the parser to handle custom message types:
```javascript
// In parseWhatsAppChat function
if (message.includes('your-custom-filter')) {
  continue; // Skip this message
}
```

### Search Enhancement
Add advanced search features in `ChatViewer.jsx`:
```javascript
const filteredMessages = messages.filter(message => {
  // Your custom search logic
});
```

## 🐛 Troubleshooting

### Common Issues

**File not parsing correctly?**
- Ensure the file is a `.txt` WhatsApp export
- Check that the chat format matches supported patterns
- Verify the file encoding is UTF-8

**Messages not displaying?**
- Check browser console for parsing errors
- Ensure all dependencies are installed
- Verify Tailwind CSS is properly configured

**Styling issues?**
- Confirm Tailwind CSS is built and included
- Check that `index.css` imports Tailwind directives
- Verify `tailwind.config.js` content paths

### Debug Mode
Add console logging to see parsed messages:
```javascript
// In FileUploader.jsx
const messages = parseWhatsAppChat(text);
console.log('Parsed messages:', messages);
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow React hooks best practices
- Use functional components
- Maintain consistent code formatting
- Add comments for complex logic
- Test with various chat formats

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **WhatsApp** for the inspiration and chat format
- **Tailwind CSS** for the beautiful styling system
- **Lucide React** for the clean, modern icons
- **React Community** for the amazing ecosystem

## 📞 Support

Having issues? Here's how to get help:

1. **Check the Issues**: Look for existing solutions
2. **Create an Issue**: Describe your problem clearly
3. **Provide Details**: Include error messages and steps to reproduce
4. **Sample Files**: Share anonymized chat exports if needed

## 🚀 Future Enhancements

- [ ] Dark mode support
- [ ] Multiple file upload
- [ ] Message statistics
- [ ] Export to PDF
- [ ] Advanced search filters
- [ ] Message encryption/decryption
- [ ] WhatsApp Web-style interface
- [ ] Voice message placeholders
- [ ] Sticker support
- [ ] Group chat participant colors

---

<div align="center">

**Made with ❤️ for WhatsApp users everywhere**

[⭐ Star this repo](https://github.com/dyavanpallyrohankumar/whatsapp-chat-viewer) • [🐛 Report Bug](https://github.com/dyavanpallyrohankumar/whatsapp-chat-viewer/issues) • [✨ Request Feature](https://github.com/dyavanpallyrohankumar/whatsapp-chat-viewer/issues)

</div>