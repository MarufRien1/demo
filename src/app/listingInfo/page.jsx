import React from 'react';
import TopHeader from '@/components/TopHeader';
import { InfoCard } from '@/components/InfoCard';
import ActionButtonRow from '@/components/ActionButtonRow';
import BackBtn from '@/components/BackBtn';

const ListingInfo = () => {
  return (
    <div>
      <TopHeader />
      <div className="mt-10 ml-16">
        <BackBtn link="/images" />
        <InfoCard
          title="Let’s give your house a title"
          body="Short titles work best. Have fun with it – you can always change it later."
        />

        <div>
          <p>Heading</p>
          <div className=" w-auto flex   border-2 border-black  rounded-full  text-2xl p-3 text-textColor pr-[300px] m-5 ml-0 ">
            <input
              className="w-full outline-none"
              type="text"
              name="location"
              id="locationInput"
              placeholder="Enter Heading"
            />
          </div>

          <p>Note</p>
          <div className=" w-auto flex   border-2 border-black    text-2xl p-3 text-textColor pr-[300px] m-5 ml-0 h-40 rounded-3xl ">
            <textarea
              className="w-full m-5 outline-none "
              type="text"
              name="location"
              id="locationInput"
              placeholder="Enter note"
            />
          </div>
        </div>
      </div>
      <ActionButtonRow />
    </div>
  );
};

export default ListingInfo;
