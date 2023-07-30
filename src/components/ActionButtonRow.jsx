import Link from 'next/link';
import React from 'react';

const ActionButtonRow = (props) => {
  return (
    <div className="flex justify-end mt-16">
      <button class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded-full m-3 text-lg ">
        Set Date & Time
      </button>
      <Link href={props.link ? props.link : '/'}>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full m-3 text-lg">
          Next
        </button>
      </Link>
    </div>
  );
};

export default ActionButtonRow;
