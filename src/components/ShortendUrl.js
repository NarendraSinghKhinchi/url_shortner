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
    <div onClick={copyToClipboard} className='pl-5 sm:text-center py-3  sm:w-4/5 max-w-5xl m-auto mb-2 bg-white relative rounded-md cursor-pointer flex justify-between items-center'>
      
      <div>
        <span className='font-bold text-lg'>{shortedUrl}</span>
        <p className='text-xs font-thin text-gray-50 mt-10'>Please Be Cautious. I am using a third party api please do not open links directly in your browser.</p>
      </div>
      <button  className='px-3 py-1 sm:py-2 sm:px-4 bg-[#46C7C7] rounded-md font-bold text-white  sm:w-32 mr-5'>
          {copySuccess ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

export default ShortendUrl