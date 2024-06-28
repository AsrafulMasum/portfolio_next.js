import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <div className='bg-white'>
      <div className='py-28 text-center'>
        <h4 className='text-text_color text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold capitalize'>i can provide you</h4>
        <h2 className='text-primary text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold italic capitalize mt-4'>the best solutions.</h2>
      </div>
      <div className=''>
        <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center'>
          <div className='lg:w-1/2 xl:w-1/3 bg-card_bg hover:bg-none duration-700'>
            <ServiceCard text="Website Development" desc="Experienced web developer proficient in frontend and backend technologies. Dedicated to creating responsive, user-friendly websites with optimal performance and seamless functionality across devices and platforms." />
          </div>
          <div className='lg:w-1/2 xl:w-1/3 bg-card_bg hover:bg-none duration-700'>
            <ServiceCard text="Front-end Development" desc="Frontend developer specializing in HTML, CSS, and JavaScript frameworks. Committed to creating intuitive, responsive and user friendly interfaces that elevate user engagement and deliver seamless digital experiences." />
          </div>
          <div className='lg:w-1/2 xl:w-1/3 lg:flex-1 xl:flex-none bg-card_bg hover:bg-none duration-700'>
            <ServiceCard text="Back-end Development" desc="Experienced backend developer proficient in building robust APIs, databases, and server-side logic. Dedicated to optimizing performance and ensuring scalable and efficient solutions for seamless application functionality." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services