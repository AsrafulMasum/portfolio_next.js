import Image from 'next/image'
import React from 'react'
import reelText from "./../public/reelText.png"
import reel from "./../public/reel.png"
import innerReel from "./../public/innerReel.png"

function ShowReel() {
  return (
    <div className='relative hidden md:block'>
      <Image className='absolute top-0' src={reel} alt='' />
      <Image className='absolute top-16 left-[72px] z-10' src={reelText} alt='' />
      <Image className='absolute top-28 left-28 z-20' src={innerReel} alt='' />
    </div>
  )
}

export default ShowReel