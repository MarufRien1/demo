import React from 'react';
import Image from 'next/image';
import { RxAvatar } from 'react-icons/rx';
const Header = () => {
  return (
    <div className="flex justify-between p-7 rounded overflow-hidden shadow-lg">
      <h1 className="text-sx text-lg font-bold pl-2">LOGO</h1>
      <RxAvatar size={40} />
    </div>
  );
};

export default Header;
