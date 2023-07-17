import React,{useState,useRef} from 'react'
import logo from '../Assets/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const[menuState,setMenuState] = useState("close");
  const menuRef = useRef();

  const handleMenuClick = (e)=>{
    if(menuState === "close"){
      setMenuState("open");
      // menuRef.current.style.height = "300px" ;
    }else{
      setMenuState("close");
      // menuRef.current.style.height = "0" ;
    }
  }
  return (
    <nav className='flex items-center justify-between py-4 px-5 max-w-5xl m-auto'>
      <div className='hidden sm:flex'>
        <img className='flex-none w-32 h-8 mr-5' src={logo} alt='logo'></img>
        <a href='#' className='px-3 mr-1 text-gray-500 font-bold translate-y-3'>Features</a>
        <a href='#' className='px-3 mr-1 text-gray-500 font-bold translate-y-3'>Pricing</a>
        <a href='#' className='px-3 mr-1 text-gray-500 font-bold translate-y-3'>Resources</a>
      </div>
      <div className='hidden sm:flex'>
        <button className='px-5 text-gray-500 mr-4 font-bold'>Login</button>
        <button className='px-5 py-2 rounded-full bg-[#46C7C7] font-bold text-white'>Sign Up</button>
      </div>
      {/* below items is visible on mobile devices  */}
      <img className='flex-none w-32 h-8 mr-5 sm:hidden'  src={logo} alt='logo'></img>
      <div onClick={handleMenuClick} className='text-gray-400 relative cursor-pointer sm:hidden'>
        <MenuIcon></MenuIcon>
        <div 
          ref={menuRef} 
          className={`${menuState === "open" ? "flex" : "hidden"} 
            flex-col justify-center items-center w-64 gap-4 z-50 
            bg-[#3B3054] rounded-xl absolute right-0 top-12 py-10 duration-1000 delay-1000
          `}
        >
          <a href='#' className='text-slate-200 font-bold inline-block '>Features</a>
          <a href='#' className='text-slate-200 font-bold inline-block '>Pricing</a>
          <a href='#' className='text-slate-200 font-bold inline-block'>Resources</a>
          <hr className='w-4/5 text-red-600 '></hr>
          <button className='px-5 text-slate-200 mr-4 font-bold'>Login</button>
          <button className='px-5 py-2 rounded-full bg-[#46C7C7] font-bold text-slate-200 w-4/5'>Sign Up</button>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar