import React from 'react';

const ActionButtonRow = () => {
  return (
    <div>
      <button class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded-full m-3 text-lg ">
        Set Date & Time
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full m-3 text-lg">
        Next
      </button>
    </div>
  );
};

export default ActionButtonRow;
