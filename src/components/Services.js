import React from 'react'
import SearchBar from './SearchBar'
import Card from './Card'
import brandIcon from '../Assets/icon-brand-recognition.svg' ;
import recordsIcon from '../Assets/icon-detailed-records.svg' ;
import customizableIcon from '../Assets/icon-fully-customizable.svg'  ;

function Services() {
  const cardData = [
    {
      key:1,
      iconUrl : brandIcon,
      header:"Brand Recognition",
      description:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
      key:2,
      iconUrl : recordsIcon,
      header:"Detailed Records",
      description:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      key:3,
      iconUrl : customizableIcon,
      header : "Fully Customizable",
      description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }
  ]
  return (
    <section className=' bg-[#efefeff0]'>
      <SearchBar></SearchBar>
      <div className='mt-8 sm:mt-16 text-center  bg-inherit max-w-sm m-auto mb-7'>
          <div className='text-4xl font-bold opacity-60'>Advanced Statistics</div>
          <p className='text-gray-500 font-semibold'>Track how your links are performing across the web with out advanced Statistics dashboard.</p>
      </div>
      <div className='text-center  flex justify-center items-center flex-col mt-20 max-w-5xl m-auto md:flex-row'>
        {
          cardData.map(data=>(
            
            <React.Fragment key={data.key}>
              <Card iconUrl={data.iconUrl} header={data.header} description={data.description}></Card>
              {data.key < 3 && (<div className='w-2 h-20 md:w-20 md:h-2 flex-shrink-[5] bg-[#46C7C7]'></div>)}
            </React.Fragment>
          ))
        }
      </div>
      <div className='bg-[#3B3054] py-10 text-center  mt-28'>
        <div className='font-bold text-3xl text-center text-white mb-5 ' >
          Boost your links today
        </div>
        <button className='px-5 py-2 bg-[#46C7C7] rounded-full font-bold text-white m-auto w-32'>Get Started</button>
      </div>
    </section>
  )
}

export default Services