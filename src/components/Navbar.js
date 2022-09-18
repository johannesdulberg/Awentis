import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-20 bg-white fixed drop-shadow-lg'>
      <div className='px-2 flex w-full h-full justify-between'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'> AWENTIS.</h1>
        </div>
        <div className='flex items-center'>
          <ul className='hidden md:flex items-center'>
          <li ><Link className="hover-underline-animation" to="home" smooth={true} duration={500}>Startseite</Link></li>
          <li><Link className="hover-underline-animation" to="about" smooth={true} offset={-200} duration={500}>Leistungen</Link></li>
          <li><Link className="hover-underline-animation" to="support" smooth={true} offset={-50} duration={500}>Über uns</Link></li>
          <li><Link className="hover-underline-animation" to="platforms" smooth={true} offset={-100} duration={500}>Unsere Arbeit</Link></li>
          <li><Link  className="hover-underline-animation"to="pricing" smooth={true} offset={-50} duration={500}>Preis</Link></li>
          </ul>
          <div className='hidden md:flex pr-4'>
          <button className='px-8 ml-4 py-3'>Kontakt</button>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <Bars3Icon className='w-9' /> : <XMarkIcon className='w-9' />}
          </div>
        </div>
        
        
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className='flex flex-col my-4'>
            <button className='px-8 py-3'>Kontakt</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;