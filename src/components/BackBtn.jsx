import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackBtn = () => {
  return (
    <button className=" inline-block rounded-full bg-[#F2F2F7]  mb-10">
      <AiOutlineArrowLeft size={38} className="p-2" color="#ABABBB" />
    </button>
  );
};

export default BackBtn;
