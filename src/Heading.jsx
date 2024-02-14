import React from 'react'
import Images from './Images'

const Heading = () => {
  return (
    <div className='relative w-full flex items-center justify-center overflow-hidden' style={{ height: 'calc(100vh - 56px)'}}>
      <div className='inter text-center uppercase text-9xl'>our advantages</div>
      <Images/>
    </div>
  )
}

export default Heading
