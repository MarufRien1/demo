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

const PriceScreen = () => {
  return (
    <>
      <Header />

      <InfoCard
        title="Give your pricing"
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
