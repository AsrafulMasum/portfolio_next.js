import Image from 'next/image'
import React from 'react'
import coding from './../public/coding.jpg'

function DevInfo() {
  return (
    <div className='flex bg-white'>
      <div className='w-2/5 relative'>
        <Image className='h-full object-cover' src={coding} alt='' />
        <div className='absolute right-0 bottom-0 bg-primary text-white py-8 px-4 text-center uppercase font-semibold'>
          <span className='text-7xl'>2</span> <br /> years experience
        </div>
      </div>
      <div className='w-3/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas debitis neque hic cumque dolores eum maxime. Numquam quis quam asperiores, iusto quidem mollitia suscipit placeat voluptatibus rerum eveniet nostrum, non nihil corporis dolorum, ex animi recusandae? Magni voluptate placeat maxime officia exercitationem sed aliquam, veniam dicta officiis blanditiis dolore ab.</div>
    </div>
  )
}

export default DevInfo