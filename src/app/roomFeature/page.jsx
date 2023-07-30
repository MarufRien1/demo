import { InfoCard } from '@/components/InfoCard';
import React from 'react';
import TopHeader from '@/components/TopHeader';
import RoundedBtnWithIcon from '@/components/RoundedBtnWithIcon';
import { PiTelevisionSimpleFill } from 'react-icons/pi';
import { AiFillCar } from 'react-icons/ai';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdOutlineAir } from 'react-icons/md';
import { GiWashingMachine } from 'react-icons/gi';
import { LuDumbbell } from 'react-icons/lu';
import { ImSoundcloud2 } from 'react-icons/im';
import { GiBarbecue } from 'react-icons/gi';
import { BsFire } from 'react-icons/bs';
import { PiBathtubFill } from 'react-icons/pi';
import { GiPoolDive } from 'react-icons/gi';
import { LuShowerHead } from 'react-icons/lu';
import ActionButtonRow from '@/components/ActionButtonRow';

const roomFeature = () => {
  return (
    <div>
      <TopHeader />
      <div className="ml-16">
        <InfoCard
          title="Who will share the room?"
          body="In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room."
        />
        <div className=" flex flex-wrap mr-60 ">
          <RoundedBtnWithIcon icon={PiTelevisionSimpleFill} text="Tv" />
          <RoundedBtnWithIcon
            icon={AiFillCar}
            text="Free parking on premises"
          />{' '}
          <RoundedBtnWithIcon icon={AiOutlineWifi} text="Wifi" />{' '}
          <RoundedBtnWithIcon
            icon={BsPersonWorkspace}
            text="Dedicated workspace"
          />{' '}
          <RoundedBtnWithIcon icon={MdOutlineAir} text="Air conditioning" />{' '}
          <RoundedBtnWithIcon icon={GiWashingMachine} text="Washing machine" />
        </div>
        <div className="mt-10  text-lg font-bold text-gray-400">
          Any standout amenities?
        </div>
        <div className=" flex flex-wrap mr-60">
          <RoundedBtnWithIcon icon={LuDumbbell} text="Exercise equipments" />
          <RoundedBtnWithIcon icon={ImSoundcloud2} text="Patio" />{' '}
          <RoundedBtnWithIcon icon={GiBarbecue} text="BBQ grill" />{' '}
          <RoundedBtnWithIcon icon={BsFire} text="Indoor fireplace" />{' '}
          <RoundedBtnWithIcon icon={BsFire} text="Fire fit" />{' '}
          <RoundedBtnWithIcon icon={PiBathtubFill} text="Hot tub" />
          <RoundedBtnWithIcon icon={GiPoolDive} text="Pool" />{' '}
          <RoundedBtnWithIcon icon={LuShowerHead} text="Outdoor shower" />
        </div>
      </div>
      <ActionButtonRow link="/images" />
    </div>
  );
};

export default roomFeature;
