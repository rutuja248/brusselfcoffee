import React, { useState } from 'react'
import { FaBars,  FaTimes} from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='lg:mx-auto px-4 md:px-15 py-4 sticky z-50 top-0 bg-[#eeddc7]'>
      <div className='mx-auto flex justify-between items-center'>
        <div className='flex items-center gap-3'><img src={logo} alt="Amy Johnson logo" className='w-70 h-15' />
        </div>
        {/* mobile navigation  */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className='w-10 h-10 text-[#63523f]' /> : <FaBars className='w-10 h-10 text-[#63523f]' />}
          </button>
        </div>
        {/* Desktop navigation  */}
        <div className='hidden md:flex space-x-6 text-lg text-[#63523f] font-light'>
          <a href="#" className="relative group">Shop<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#63523f] transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#projects" className="relative group">About<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#63523f] transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#services" className="relative group">Blog<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#63523f] transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#services" className="relative group">Locations<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#63523f] transition-all duration-300 group-hover:w-full"></span></a>
          <a href="#services" className="relative group">Contact<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#63523f] transition-all duration-300 group-hover:w-full"></span></a>
        </div>
        <button className='hidden md:block p-[1.5px]'>
          <a href="#tbd" className='flex items-center gap-2 rounded-md bg-[#3f352b] px-6 py-2 text-[#d3b998] font-light'>Order Online</a>
        </button>
      </div>
      {/* mobile Menu */}
      {
        isOpen && (
          <div className='md:hidden flex flex-col items-center space-y-4 mt-4 text-lg  text-[#63523f] font-light'>
            <a href="#" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            {/* <div>
              <FaLinkedin className='w-10 h-10'></FaLinkedin>
              <FaEnvelope className='w-10 h-10'></FaEnvelope>
            </div> */}
            <div className="p-[1.5px]">
              <a
                href="#tbd"
                className="flex items-center justify-center gap-2 rounded-md bg-[#63523f] px-6 py-3 text-[#d3b998] min-h-[44px] font-light"
              >
                Order Online
              </a>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar