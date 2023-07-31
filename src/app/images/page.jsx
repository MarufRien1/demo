import ActionButtonRow from '@/components/ActionButtonRow';
import { InfoCard } from '@/components/InfoCard';
import RoundPlusBtn from '@/components/RoundPlusBtn';
import TopHeader from '@/components/TopHeader';
import React from 'react';
import BackBtn from '@/components/BackBtn';
const Images = () => {
  return (
    <div>
      <TopHeader />
      <div className="ml-16">
        <BackBtn link="/roomFeature" />
        <InfoCard title="Upload images" body="Choose at least 6 pictures." />

        <div className="flex flex-col items-center justify-center px-40 py-16 m-4 ml-0 border-2 border-black border-dashed rounded-3xl w-fit">
          <RoundPlusBtn style="add" />
          <p className="my-2 text-2xl font-bold text-center">Add photos</p>
          <p className="text-sm text-center text-gray-500">
            <span className="text-blue-700">Browse file</span> from gallery
          </p>
        </div>
      </div>
      <ActionButtonRow link="/listingInfo" />
    </div>
  );
};

export default Images;
