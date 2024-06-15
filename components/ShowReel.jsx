"use client"
import Image from 'next/image'
import React from 'react'
import reelText from "./../public/reelText.png"
import reel from "./../public/reel.png"
import innerReel from "./../public/innerReel.png"

function ShowReel() {
  return (
    <div className='relative'>
      <Image className='absolute top-0' src={reel} alt='' />
      <Image className='absolute top-16 left-[72px] z-10' style={{ animation: 'spin 5s linear infinite' }} src={reelText} alt='' />
      <Image className='absolute top-28 left-28 z-20' style={{ animation: 'spin-clockwise 3s linear infinite alternate, spin-counterclockwise 3s linear infinite alternate-reverse' }} src={innerReel} alt='' />
      <style jsx global>{`
  @keyframes spin-clockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(300deg);
    }
  }

  @keyframes spin-counterclockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-300deg);
    }
  }
`}</style>
    </div>
  )
}

export default ShowReel