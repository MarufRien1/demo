import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <>
      <div className="flex justify-between mb-8 overflow-hidden rounded shadow-lg p-7">
        <Link href="/">
          <h1 role="button" className="text-lg font-bold text-sx ml-14">
            LOGO
          </h1>
        </Link>
        <RxAvatar size={40} />
      </div>
    </>
  );
};

export default TopHeader;
