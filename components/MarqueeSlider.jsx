import React from 'react'
import Marquee from "react-fast-marquee";

function MarqueeSlider() {
  return (
    <div className='text-4xl font-bold text-text_color bg-white py-8'>
      <Marquee speed={100}>
        <div className='space-x-28 flex'>
        <p>Web Development</p>
        <p>Front-end Development</p>
        <p>Back-end Development</p>
        <p>Full Stack Development</p>
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueeSlider