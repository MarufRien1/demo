import React from 'react';
import { InfoCard } from '@/components/InfoCard';
import BackBtn from '@/components/BackBtn';
import ActionButtonRow from '@/components/ActionButtonRow';
import RoundedBtnWithIcon from '@/components/RoundedBtnWithIcon';
import { MdApartment } from 'react-icons/md';
import { RiHotelLine } from 'react-icons/ri';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { PiHouse } from 'react-icons/pi';
import { MdWarehouse } from 'react-icons/md';
import { TbHomeHeart } from 'react-icons/tb';
import { FaPlus, FaMinus } from 'react-icons/fa';
import TopHeader from '@/components/TopHeader';
import RoundPlusBtn from './RoundPlusBtn';

const PriceScreen = () => {
  return (
    <>
      <TopHeader />
      <div className="ml-20">
        <BackBtn />
        <div className="mb-16">
          <InfoCard
            title="Give your pricing"
            body="In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room."
          />

          <div className=" my-10 flex">
            <RoundPlusBtn style="add" />

            <>
              <div className="flex justify-center items-center align-baseline bg-white text-gray-600  border-2 border-gray-800 rounded-full font-semibold text-xl  mx-4 px-[100px] ">
                <span className="text-bold"> USD $80.00</span>
              </div>
            </>

            <RoundPlusBtn style="remove" />
          </div>

          <div className="flex  mb-3">
            <div className="flex justify-center items-center align-baseline bg-gray-200 text-gray-600  border-2  rounded-full font-semibold text-2xl  mx-4 px-[150px]   py-4 ">
              <span> USD $80.00</span>
            </div>
          </div>
          <span className="ml-5 text-gray-600">His Bid rate is $75 to $90</span>
        </div>

        <div className="mb-16">
          <InfoCard
            title="Which of these best describe your booked room?"
            body="In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room."
          />
          <div className="flex">
            <RoundedBtnWithIcon icon={MdApartment} text="Apartment" />
            <RoundedBtnWithIcon icon={RiHotelLine} text="Hotel" />
            <RoundedBtnWithIcon icon={MdOutlineMeetingRoom} text="Flat" />
            <RoundedBtnWithIcon icon={PiHouse} text="House" />
            <RoundedBtnWithIcon icon={MdWarehouse} text="Single room" />
            <RoundedBtnWithIcon icon={TbHomeHeart} text="Shared room" />
          </div>
        </div>
        <ActionButtonRow link="/location" />
      </div>
    </>
  );
};

export default PriceScreen;
