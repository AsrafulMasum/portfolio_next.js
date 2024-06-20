import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-4 md:mx-10 xl:mx-auto flex flex-col lg:flex-row lg:flex-wrap justify-center'>
        <div className='lg:w-1/2 xl:w-1/3'>
          <ServiceCard text="Website Development" desc="Experienced web developer proficient in frontend and backend technologies. Dedicated to creating responsive, user-friendly websites with optimal performance and seamless functionality across devices and platforms." />
        </div>
        <div className='lg:w-1/2 xl:w-1/3'>
          <ServiceCard text="Front-end Development" desc="Frontend developer specializing in HTML, CSS, and JavaScript frameworks. Committed to creating intuitive, responsive interfaces that elevate user engagement and deliver seamless digital experiences." />
        </div>
        <div className='lg:w-1/2 xl:w-1/3 lg:flex-1 xl:flex-none'>
          <ServiceCard text="Back-end Development" desc="Experienced backend developer proficient in building robust APIs, databases, and server-side logic. Dedicated to optimizing performance and ensuring scalable solutions for seamless application functionality." />
        </div>
      </div>
    </div>
  )
}

export default Services