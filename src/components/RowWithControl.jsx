import React from 'react';
import RoundPlusBtn from './RoundPlusBtn';
import RoundText from './RoundText';

const RowWithControl = (props) => {
  return (
    <div className="flex items-center justify-between my-5">
      <div className="mr-16 text-2xl font-bold">{props.name}</div>
      <div className="w-5"></div>
      <div className="flex items-center">
        <RoundPlusBtn style="add" />
        <RoundText text="01" />
        <RoundPlusBtn />
      </div>
    </div>
  );
};

export default RowWithControl;
