import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white text-xs px-4 py-2">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Chat Viewer. Built with 💚 by <a href="https://github.com/dyavanpallyrohankumar" target="_blank" rel="noopener noreferrer">Rohankumar</a>.
        </p>
        {/* <div className="mt-1 md:mt-0 text-center md:text-right space-x-2">
          <a href="#" className="hover:underline text-white/80">Privacy Policy</a>
          <span className="text-white/60">•</span>
          <a href="#" className="hover:underline text-white/80">Terms</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
