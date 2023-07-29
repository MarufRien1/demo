import Image from 'next/image'
import Header from './components/Header'
import { InfoCard } from './components/InfoCard'
import BackBtn from './components/BackBtn'
import ActionButtonRow from './components/ActionButtonRow'

export default function Home() {
  return (<>
    <Header />
    <BackBtn />
    <InfoCard />
    <ActionButtonRow />
  </>
  )
}
