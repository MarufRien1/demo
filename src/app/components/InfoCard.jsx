import React from 'react';

export const InfoCard = (props) => {
  return (
    <div className="">
      <h1 className="text-3xl font-semibold mb-3">{props.title}</h1>
      <p className=" text-lg font-medium">{props.body}</p>
    </div>
  );
};
