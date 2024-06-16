"use client"
import React, { useState } from 'react'
import Button from './Button';
import Image from 'next/image';
import stroke from "./../public/stroke.png"

function ServiceCard({ text, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        transition: 'background-color 0.5s ease',
      }}
      className='bg-card_bg py-24 px-16 xl:w-1/3 relative overflow-hidden'>
      <h2 className='text-5xl font-semibold text-primary mb-10'>{text}</h2>
      <p className='text-dark_black font-semibold mb-20'>
        {desc}
      </p>
      <Button text="View Projects" styles="bg-btn_color text-white" spanStyle="bg-primary text-white" />
      <div className='absolute bottom-0 -right-5'>
        <Image className='w-32' src={stroke} alt='Stroke' style={{
          transition: 'transform 0.3s',
          transform: isHovered ? 'rotate(25deg)' : 'rotate(0deg)'
        }} />
      </div>
      <div
        className="hover-animation"
        style={{
          position: 'absolute',
          top: 0,
          left: isHovered ? '0%' : '100%', // Start position based on hover state
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFF', // Initial color when transitioning
          zIndex: 1,
          animation: isHovered ? 'slide-in 0.5s forwards' : 'slide-out 0.5s forwards', // Apply animation based on hover state
        }}
      />
      <style jsx>{`
        @keyframes slide-in {
          0% {
            left: 100%; /* Start from right */
          }
          100% {
            left: 0%; /* Move to left */
          }
        }

        @keyframes slide-out {
          0% {
            right: 0%; /* Start from left */
          }
          100% {
            right: 100%; /* Move to right */
          }
        }
      `}</style>
    </div>
  )
}

export default ServiceCard