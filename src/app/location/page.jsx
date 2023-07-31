import ActionButtonRow from '@/components/ActionButtonRow';
import BackBtn from '@/components/BackBtn';
import { InfoCard } from '@/components/InfoCard';
import TopHeader from '@/components/TopHeader';
import Image from 'next/image';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import MapPic from '../../../public/Map.png';

const Location = () => {
  return (
    <div>
      <TopHeader />
      <div className="mt-10 ml-16">
        <BackBtn link="/" />
        <InfoCard
          className
          title="Where's your place located?"
          body="In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room."
        />

        <div className=" w-fit flex   border-2 border-textColor  rounded-full  text-2xl p-3 text-textColor pr-[300px] m-5 ml-0 ">
          <MdLocationOn size={30} className="ml-1" />
          <form className="ml-3">
            <input
              className="outline-none"
              type="text"
              name="location"
              id="locationInput"
              placeholder="Enter location"
            />
          </form>
        </div>

        <Image src={MapPic} width={1230} height={447} sizes="100vw" />
      </div>

      <div className="mt-5 mr-10 ">
        <ActionButtonRow link="/room" />
      </div>
    </div>
  );
};

export default Location;
