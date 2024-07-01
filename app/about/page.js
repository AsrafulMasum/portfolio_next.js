import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import React from 'react'

function page() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <About />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

export default page