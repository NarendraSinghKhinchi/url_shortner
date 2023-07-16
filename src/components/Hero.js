import React from 'react';
import heroBanner from '../Assets/illustration-working.svg' ;

function Hero() {
  return (
    <section className='flex flex-col items-center justify-between  sm:flex-row-reverse  mt-5 sm:mt-8  m-auto max-w-5xl mb-28'>
        <img src={heroBanner} alt='hero banner' className='sm:w-[300px] md:w-[400px] lg:w-[500px]'></img>
        <div className='text-center sm:text-left max-w-md px-4 mt-4 sm:mt-0'>
            <div className='text-4xl md:text-7xl md:leading-[80px] font-bold opacity-75'>More than just shorter links</div>
            <p className='text-gray-500 leading-none mt-4'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className='px-10 py-3 rounded-full bg-[#46C7C7] font-bold text-white mt-4'>Get Started</button>
        </div>
    </section>
  )
}

export default Hero