import React from 'react';

const Footer = () => {
  return (
<footer className="p-4 text-center text-black w-full mt-10">
  <p className="text-sm sm:text-base">
    &copy; {new Date().getFullYear()} Ankita. All Rights Reserved
  </p>
</footer>

  );
};

export default Footer;
