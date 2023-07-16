import React,{useState} from 'react'

function ShortendUrl({shortedUrl}) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => { 
    try {
      await navigator.clipboard.writeText(shortedUrl);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };
  return (
    <div onClick={copyToClipboard} className='pl-5  sm:text-center py-3 font-bold text-lg sm:w-4/5 max-w-5xl m-auto mb-2 bg-white relative rounded-md cursor-pointer'>
        {shortedUrl}
        <button  className='px-3 py-1 sm:py-2 sm:px-4 bg-[#46C7C7] rounded-md font-bold text-white  sm:w-32 absolute right-2 top-0 '>
            {copySuccess ? 'Copied!' : 'Copy'}
        </button>
    </div>
  )
}

export default ShortendUrl