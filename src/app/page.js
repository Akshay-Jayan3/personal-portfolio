import CustomCursor from '@/components/cursor'
import HeroSection from '@/components/hero';
import RunningText from '@/components/runningText';
import { Shapes } from '@/components/shapes';
import React from 'react'


const page = () => {
  return (
    <>
      <Shapes />
      <div className='flex justify-center items-center h-4/6'>
        <RunningText />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <HeroSection />
      </div>
    </>

  )
}

export default page