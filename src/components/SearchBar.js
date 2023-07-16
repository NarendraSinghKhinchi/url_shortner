import React,{useState} from 'react'
import shortUrl from '../api';
import ShortendUrl from './ShortendUrl';

function SearchBar() {
  const [value , setValue] = useState("");
  const [loading , setLoading] = useState(false);
  const [data,setData] = useState({});

  const handleShort = async ()=>{
    if(loading)return ;
    setLoading(true);
    const response = await shortUrl(value);
    setLoading(false);
    setData(response);
  }
  
  
  return (
    <>
      <div className='bg-[#3B3054] px-5 py-5 flex flex-col gap-7 w-4/5  m-auto rounded-md sm:flex-row sm:justify-evenly sm:h-22 max-w-5xl -translate-y-2/4'>
        <input onChange={(e)=>{setValue(e.target.value)}} className='px-5 py-2 rounded-sm font-semibold sm:flex-1 outline-none' placeholder='shorten a linke here...' value={value}></input>
        <button onClick={handleShort} className='px-5 py-2 bg-[#46C7C7] rounded-md font-bold text-white  sm:w-32'>shorten it!</button>
      </div>
      {
        // this display the error 
        (!(data.ok === undefined) && !data.ok) && (
          <div className='text-center py-3 font-bold text-lg w-4/5 max-w-5xl m-auto mb-2 bg-white relative rounded-md cursor-pointer'>{data.error.split(".")[0]}.</div>
        )
      }
      {
        // this displays the shortened url 
        (!(data.ok === undefined) && data.ok) && (
          <>
          <ShortendUrl shortedUrl={data.result.short_link}></ShortendUrl>
          <ShortendUrl shortedUrl={data.result.short_link2}></ShortendUrl>
          <ShortendUrl shortedUrl={data.result.short_link3}></ShortendUrl>
          </>
        )
      }
    </>
  )
}

export default SearchBar