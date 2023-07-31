import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';

const BackBtn = (props) => {
  return (
    <Link href={props.link ? props.link : '/'}>
      <button className=" inline-block rounded-full bg-[#F2F2F7]  mb-10">
        <AiOutlineArrowLeft size={38} className="p-2" color="#ABABBB" />
      </button>
    </Link>
  );
};

export default BackBtn;
