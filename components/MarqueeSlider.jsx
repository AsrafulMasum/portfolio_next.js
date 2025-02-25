import React from 'react'
import Marquee from "react-fast-marquee";

function MarqueeSlider() {
  return (
    <div className='text-4xl font-bold text-text_color bg-white py-20 border-b border-t border-[#DFE0DF]'>
      <Marquee speed={100}>
        <div className='flex gap-20 xl:gap-28'>
        <p className='ml-20'>Web Development</p>
        <p>Front-end Development</p>
        <p>Back-end Development</p>
        <p>Full Stack Development</p>
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueeSlider