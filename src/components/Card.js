import React from 'react'

function Card({iconUrl , header , description}) {
  return (
    <div className='w-64 h-64 bg-white md:first:-translate-y-10 md:last:translate-y-12 px-4 pb-4 rounded-md shadow-lg '>
        <div className='bg-[#3B3054] w-20 h-20 rounded-full flex m-auto -translate-y-2/4'>
            <img src={iconUrl} algo='icon' className='m-auto w-8'></img>
        </div>
        <div className='text-xl font-extrabold opacity-90 -translate-y-2/4'>{header}</div>
        <p className='text-gray-400 font-semibold leading-6 text-sm'>{description}</p>
    </div>
  )
}

export default Card