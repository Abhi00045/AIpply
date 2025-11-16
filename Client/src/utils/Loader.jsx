import React from 'react'
import {ScaleLoader} from 'react-spinners'

function Loader() {
  return (
    <>
    <div className='h-full w-full bg-white'>
        <ScaleLoader
  color="#228ff2"
  height={50}
  margin={2}
  radius={5}
  width={5}
/>
    </div>
    </>
  )
}

export default Loader