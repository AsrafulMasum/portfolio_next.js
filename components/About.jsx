import Image from 'next/image'
import React from 'react'
import js from './../public/js.png'
import react from './../public/react.png'
import mongoDB from './../public/mongodb.png'
import express from './../public/express.png'
import node from './../public/node.png'

function About() {
  return (
    <section className='max-w-screen-xl mx-4 md:mx-10 xl:mx-auto'>
      <div className='h-screen relative'>
        <div className='h-full lg:w-1/2 flex flex-col justify-center'>
          <h2 className='text-primary text-6xl mb-8'>About Me</h2>
          <h3 className='text-primary text-3xl font-semibold mb-4'>Hello!</h3>
          <h4 className='text-2xl mb-4 text-dark_black font-medium'>I'm Mohammad Asraful Islam Masum, a passionate, dedicated, hard-working <span className='text-primary text-3xl font-semibold'>MERN</span> stack developer.</h4>
          <p className='text-xl text-dark_black/60 font-medium'>
            A passionate web developer experienced in crafting dynamic applications using the MERN stack (MongoDB, Express.js, React, Node.js). With a keen eye for detail, I specialize in creating user-friendly interfaces. My commitment to delivering high-quality code is complemented by a constant pursuit of the latest industry trends. Excited to contribute my skills and innovation to your projects.
          </p>
        </div>
        <Image className='absolute top-44 right-0 w-20 animate-pulse' src={mongoDB} alt='' />
        <Image className='absolute top-80 right-36 w-20 animate-bounce' src={js} alt='' />
        <Image className='absolute top-64 right-96 w-20 animate-spin' src={react} alt='' />
        <Image className='absolute top-[450px] right-80 w-20 animate-pulse' src={express} alt='' />
        <Image className='absolute top-[580px] right-16 w-20' src={node} alt='' />
        <Image className='absolute top-[680px] right-64 w-20' src={js} alt='' />
      </div>
    </section>
  )
}

export default About