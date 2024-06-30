import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import React from 'react'

function page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Projects />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

export default page