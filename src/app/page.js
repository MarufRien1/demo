import Image from 'next/image'
import Header from './components/Header'
import { InfoCard } from './components/InfoCard'
import BackBtn from './components/BackBtn'
import ActionButtonRow from './components/ActionButtonRow'
import RoundedBtn from './components/RoundedBtn'
import { MdApartment } from 'react-icons/md';


export default function Home() {
  return (<>
    <Header />

    <InfoCard
      title="Give your pricing"
      body="In this step, we'll ask you which type of stays you have and if guests will book the entire place or just a room." />
    <RoundedBtn icon={MdApartment} text="app" />

  </>
  )
}
