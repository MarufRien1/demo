import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import { InfoCard } from '../components/InfoCard';
import BackBtn from '../components/BackBtn';
import ActionButtonRow from '../components/ActionButtonRow';
import RoundedBtnWithIcon from '../components/RoundedBtnWithIcon';
import { MdApartment } from 'react-icons/md';
import { RiHotelLine } from 'react-icons/ri';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { PiHouse } from 'react-icons/pi';
import { MdWarehouse } from 'react-icons/md';
import { TbHomeHeart } from 'react-icons/tb';
import { FaPlus, FaMinus } from 'react-icons/fa';

const PriceScreen = () => {
  return (
    <>
      <Header />

      <InfoCard
        title="Give your pricing"
        body="In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room."
      />

      <div className=" my-10 flex ml-16">
        <div className="bg-white  p-3 rounded-full border-2 border-black ">
          <FaPlus size={20} />
        </div>

        <>
          <div className="flex justify-center align-baseline bg-white text-gray-600  border-2 border-gray-800 rounded-full font-semibold text-xl  mx-4 px-[100px] ">
            <span> USD $80.00</span>
          </div>
        </>

        <div className="bg-white  p-3 rounded-full border-2 border-black ">
          <FaMinus size={20} />
        </div>
      </div>

      {/* <div className="flex justify-center">
        <div className="flex justify-center align-baseline bg-white text-gray-600  border-2 border-gray-800 rounded-full font-semibold text-xl  mx-4 px-[100px] ">
          <span> USD $80.00</span>
        </div>
      </div> */}
      {/* <div className="bg-red-500 inline-block border-2 border-black rounded-full font-semibold text-xl  mx-4 px-[100px]">
        USD $80.00
      </div> */}

      <InfoCard
        title="Which of these best describe your booked room?"
        body="In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room."
      />
      <div className="flex  ml-10">
        <RoundedBtnWithIcon icon={MdApartment} text="Apartment" />
        <RoundedBtnWithIcon icon={RiHotelLine} text="Hotel" />
        <RoundedBtnWithIcon icon={MdOutlineMeetingRoom} text="Flat" />
        <RoundedBtnWithIcon icon={PiHouse} text="House" />
        <RoundedBtnWithIcon icon={MdWarehouse} text="Single room" />
        <RoundedBtnWithIcon icon={TbHomeHeart} text="Shared room" />
      </div>
      <ActionButtonRow />
    </>
  );
};

export default PriceScreen;
