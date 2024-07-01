"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import React from 'react'

function page() {
  return (
    <main className='bg-white'>
      <Navbar />
      <h2 className='w-screen h-screen flex justify-center items-center text-5xl md:text-6xl lg:text-8xl text-primary'>
        Coming Soon
        <span style={{
          animation: 'bounce 1s infinite ease-in-out',
          animationDelay: '-0.4s'
        }}>.</span>
        <span style={{
          animation: 'bounce 1s infinite ease-in-out',
          animationDelay: '-0.2s'
        }}>.</span>
        <span style={{
          animation: 'bounce 1s infinite ease-in-out',
        }}>.</span>
        </h2>
      <Footer />
      <ScrollToTopButton />
      <style jsx global>{`
  @keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
`}</style>
    </main>
  )
}

export default page