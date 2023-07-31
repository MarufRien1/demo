import ActionButtonRow from '@/components/ActionButtonRow';
import { InfoCard } from '@/components/InfoCard';
import RoundPlusBtn from '@/components/RoundPlusBtn';
import TopHeader from '@/components/TopHeader';
import React from 'react';

const Images = () => {
  return (
    <div>
      <TopHeader />
      <div className="ml-16">
        <InfoCard title="Upload images" body="Choose at least 6 pictures." />

        <div className=" flex flex-col justify-center items-center border-dashed border-2 border-black m-4 ml-0 rounded-3xl w-fit px-40 py-16">
          <RoundPlusBtn style="add" />
          <p className="text-center text-2xl font-bold my-2">Add photos</p>
          <p className="text-center text-sm text-gray-500">
            <span className="text-blue-700">Browse file</span> from gallery
          </p>
        </div>
      </div>
      <ActionButtonRow link="/listingInfo" />
    </div>
  );
};

export default Images;
