import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const RoundPlusBtn = (props) => {
  return (
    <div className="bg-white  p-3 rounded-full border-2 border-black w-fit h-fit">
      {props.style == 'add' ? <FaPlus size={20} /> : <FaMinus size={20} />}
    </div>
  );
};

export default RoundPlusBtn;
