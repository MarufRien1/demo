import React from 'react';
import TopHeader from '@/components/TopHeader';
import { InfoCard } from '@/components/InfoCard';
import ActionButtonRow from '@/components/ActionButtonRow';

const ListingInfo = () => {
  return (
    <div>
      <TopHeader />
      <div className="mt-10 ml-16">
        <InfoCard
          title="Let’s give your house a title"
          body="Short titles work best. Have fun with it – you can always change it later."
        />
        {/* <div>
          <form form className="flex-col">
            <p>Heading</p>

            <div className="border-black border-2 bg-red-500">
              <input type="text" className="" />
            </div>
            <p>Note</p>
            <input type="text" />
          </form>
        </div> */}

        {/* form div */}
        <div>
          <p>Heading</p>
          <div className=" w-auto flex   border-2 border-black  rounded-full  text-2xl p-3 text-textColor pr-[300px] m-5 ml-0 ">
            <input
              className="outline-none w-full"
              type="text"
              name="location"
              id="locationInput"
              placeholder="Enter Heading"
            />
          </div>

          <p>Note</p>
          <div className=" w-auto flex   border-2 border-black  rounded-full  text-2xl p-3 text-textColor pr-[300px] m-5 ml-0 h-40 ">
            <textarea
              className="outline-none w-full m-5 "
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
