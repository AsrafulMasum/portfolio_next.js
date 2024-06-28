import React from 'react'

function Projects() {
  return (
    <div className='bg-white py-28'>
      <ul className="timeline max-md:timeline-compact timeline-vertical max-w-screen-xl mx-4 md:mx-10 xl:mx-auto">
        <li>
          
          <div className="timeline-start w-full">
            <h2 className='text-7xl font-bold'>My recent <br /> <span className='text-primary italic text-9xl'>works</span></h2>
          </div>
        </li>
        <li>
          <div className="timeline-end">
            <time className="font-mono italic">1998</time>
            <div className="text-lg font-black">iMac</div>
            iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
            been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
            and has evolved through seven distinct forms
          </div>
        </li>
        <li>
          <div className="timeline-start md:text-end">
            <time className="font-mono italic">2001</time>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and multi-purpose mobile devices
            designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
            8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
            million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
            over 20 years, the iPod brand is the oldest to be discontinued by Apple
          </div>
        </li>
        <li>
          <div className="timeline-end">
            <time className="font-mono italic">2007</time>
            <div className="text-lg font-black">iPhone</div>
            iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
            operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
            January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
            of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
            accounts for 15.6% of global smartphone market share
          </div>
        </li>
        <li>
          <div className="timeline-start md:text-end">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
            tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
            iOS and other Apple products and services
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects