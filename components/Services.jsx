import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-4 md:mx-10 xl:mx-auto flex'>
        <ServiceCard text="Website Development" desc="Experienced web developer proficient in frontend and backend technologies. Dedicated to creating responsive, user-friendly websites with optimal performance and seamless functionality across devices and platforms." />

        <ServiceCard text="Front-end Development" desc="Frontend developer specializing in HTML, CSS, and JavaScript frameworks. Committed to creating intuitive, responsive interfaces that elevate user engagement and deliver seamless digital experiences." />

        <ServiceCard text="Back-end Development" desc="Experienced backend developer proficient in building robust APIs, databases, and server-side logic. Dedicated to optimizing performance and ensuring scalable solutions for seamless application functionality." />
      </div>
    </div>
  )
}

export default Services