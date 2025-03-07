import React from 'react';

const Footer = () => {
  return (
    <footer className="p-2 flex justify-between items-center w-full text-black">
      {/* Left side content */}
      <div className="flex-1 text-center">
        <p className="font-normal font-pixel text-sm sm:text-base lg:text-lg text-tertiary">
        &copy; {new Date().getFullYear()} Ankita. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
