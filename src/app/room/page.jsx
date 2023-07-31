import ActionButtonRow from '@/components/ActionButtonRow';
import { InfoCard } from '@/components/InfoCard';
import RoundedBtnWithIcon from '@/components/RoundedBtnWithIcon';
import RowWithControl from '@/components/RowWithControl';
import TopHeader from '@/components/TopHeader';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const Room = () => {
  return (
    <div>
      <TopHeader />
      <div className="ml-16">
        <InfoCard
          title="Who will share the room?"
          body="In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room."
        />

        <div className="flex mt-3">
          <RoundedBtnWithIcon text="Only Me" icon={BsFillPersonFill} />
          <RoundedBtnWithIcon
            text="Multiple Persons"
            icon={BsFillPersonPlusFill}
          />
        </div>

        <div className="font-medium text-xl my-10">Shareable Details</div>

        <div className="flex-col w-fit ">
          <RowWithControl name="Persons" />
          <RowWithControl name="Bedrooms" />
          <RowWithControl name="Beds" />
          <RowWithControl name="Bathrooms" />
        </div>

        <ActionButtonRow link="/roomFeature" />
      </div>
    </div>
  );
};

export default Room;
