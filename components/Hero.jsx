import React from 'react'
import ShowReel from './ShowReel'
import Button from './Button'
import Image from 'next/image'
import profile from "./../public/profile.png"

function Hero() {
  return (
    <div className='h-screen bg-primary py-20 text-white'>
      <div className='h-full max-w-screen-xl mx-4 md:mx-10 xl:mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-0'>
        <div className='h-full lg:w-1/2 flex flex-col justify-center gap-12'>
          <h4 className='text-3xl lg:text-5xl font-medium tracking-widest'>MOHAMMAD ASRAFUL ISLAM MASUM</h4>
          <h2 className='text-5xl lg:text-7xl font-semibold'>WEB DEVELOPER</h2>
          <div className='flex flex-col lg:flex-row justify-start lg:items-center gap-4'>
            <Button text="Download Resume" styles="bg-btn_color text-white" spanStyle="bg-primary text-white" />
            <Button text="Contact Me" styles="bg-transparent text-white border" spanStyle="bg-white text-primary" />
          </div>
        </div>
        {/* <div className='w-1/2 hidden xl:block'>
          <ShowReel />
        </div> */}
        <div className='h-full lg:w-1/3 lg:mt-60 '>
          <Image className='lg:h-4/6 object-cover rounded-full border-2' src={profile} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Hero