"use client"
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import React from 'react'

function page() {
  return (
    <main className='bg-white'>
      <Navbar />
      <Blogs />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

export default page