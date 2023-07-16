import React from 'react'
import fbIcon from '../Assets/icon-facebook.svg'
import instaIcon from '../Assets/icon-instagram.svg'
import twitIcon from '../Assets/icon-twitter.svg' ;
import pinIcon from '../Assets/icon-pinterest.svg'

function Footer() {
  return (
    <div className='bg-[#232127] text-white pt-9 justify-around flex flex-col gap-7 sm:gap-0 sm:flex-row'>
        <div className='font-bold text-3xl text-center'>
            Shortly
        </div>
        <div className='flex flex-col text-center'>
            <div className='font-bold mb-5'>Features</div>
            <a href="#" className='text-gray-400'>Link Shortening</a>
            <a href="#" className='text-gray-400'>Branded Links</a>
            <a href="#" className='text-gray-400'>Analytics</a>
        </div>
        <div className='flex flex-col text-center'>
            <div className='font-bold mb-5'>Resources</div>
            <a href="#" className='text-gray-400'>Blog</a>
            <a href="#" className='text-gray-400'>Developers</a>
            <a href="#" className='text-gray-400'>Support</a>
        </div>
        <div className='flex flex-col text-center'>
            <div className='font-bold mb-5'>Company</div>
            <a href="#" className='text-gray-400'>About</a>
            <a href="#" className='text-gray-400'>Our Team</a>
            <a href="#" className='text-gray-400'>Carrers</a>
            <a href="#" className='text-gray-400'>Contact</a>
        </div>
        <div className='flex flex-row gap-2 justify-center'>
            <a href="#">
                <img src={fbIcon} alt='social icon'></img>
            </a>
            <a href="#" >
                <img src={instaIcon} alt='social icon'></img>
            </a>
            <a href="#" >
                <img src={twitIcon} alt='social icon'></img>
            </a>
            <a href="#"  >
                <img src={pinIcon} alt='social icon'></img>
            </a>
        </div>
    </div>
  )
}

export default Footer