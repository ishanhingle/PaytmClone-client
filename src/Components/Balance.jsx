import React from 'react'

function Balance({value}) {
  return (
    <div className='w-3/4 lg:w-1/3 rounded-3xl border-4 mt-4 flex flex-col items-center'>
     <p className='w-3/4 p-0 inline font-black text-3xl lg:text-5xl'>₹{value}</p>
     <p className='inline w-3/4 p-0'>Your Balance</p>
    </div>
  )
}

export default Balance