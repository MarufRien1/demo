import React from 'react';

const RoundText = (props) => {
  return (
    <div className="rounded-full bg-gray-200 font-bold text-xl p-4 mx-10 ">
      {props.text}
    </div>
  );
};

export default RoundText;
