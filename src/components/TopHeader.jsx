import React from 'react';
import { RxAvatar } from 'react-icons/rx';

const TopHeader = () => {
  return (
    <>
      <div className="flex justify-between p-7 rounded overflow-hidden shadow-lg mb-8">
        <h1 className="text-sx text-lg font-bold ml-14">LOGO</h1>
        <RxAvatar size={40} />
      </div>
    </>
  );
};

export default TopHeader;
