import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackBtn = () => {
  return (
    <button className=" inline-block rounded-full bg-gray-200  mb-10">
      <AiOutlineArrowLeft size={38} className="p-2" color="#9CA3AF" />
    </button>
  );
};

export default BackBtn;