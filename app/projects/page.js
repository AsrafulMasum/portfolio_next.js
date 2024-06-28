import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'

function page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  )
}

export default page