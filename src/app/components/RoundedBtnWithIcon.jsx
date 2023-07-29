import React from 'react';

const RoundedBtnWithIcon = (props) => {
  return (
    <button
      type="button"
      class=" flex py-2.5 px-5  mb-2 text-lg font-semibold text-black  bg-gray-100 rounded-full justify-center items-center mr-5 mt-5"
    >
      <props.icon size={30} className="mx-2" />
      {props.text}
    </button>
  );
};

export default RoundedBtnWithIcon;
