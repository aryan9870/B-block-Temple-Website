import { useState } from 'react';
import React from 'react'
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import contact from '../assets/contact.png';
import { Link } from 'react-scroll';
import './Navbar.css'

const Navbar = () => {

  const [showmenu, setshowmenu] = useState(false)

  function handleContactscroll() {
    document.querySelector(".contact").scrollIntoView({ behavior: 'smooth' })
  }

  function handleshow() {
    setshowmenu(!showmenu)
  }

  function aryanhandle() {
    setshowmenu(!showmenu)
  }

  return (
    <div>
      <div className='nav bg-[#B22222] bg-opacity-20 flex bg-transparent rounded-b-lg sm:justify-around justify-between px-6 sm:px-0 text-white items-center py-1 fixed w-full z-50'>
        <div className="logo">
          <img className='h-16' src={logo} alt="logo" />
        </div>
        <div className="menuButtons sm:flex list-none gap-10 hidden">
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={0} duration={500} className="item font-semibold text-[#FF6F00]">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500} className="item font-semibold text-[#FF6F00]">About</Link>
          <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={0} duration={500} className="item font-semibold text-[#FF6F00]">Evants</Link>
          <Link activeClass='active' to='clint' spy={true} smooth={true} offset={0} duration={500} className="item font-semibold text-[#FF6F00]">Gallery</Link>
        </div>
        <button onClick={handleContactscroll} className="border-2 mb-3 sm:mb-0 border-transparent hover:border-[#FF6F00] hover:bg-[#FFD700] bg-[#388E3C] text-black sm:flex py-2 px-6 rounded-3xl items-center gap-3 w-fit hidden ">
          <img className='h-4 mt-1 ' src={contact} alt="" />Contact Us</button>

        <div className="menu sm:hidden" onClick={handleshow}>
          <img className='h-10' src={menu} alt="logo" />
        </div>
      </div>
      <div className={showmenu ? "flex" : "hidden"}>
          <div className='flex flex-col w-28 text-white bg-gray-800 gap-2 fixed z-50 right-24 top-10 rounded-md py-2 px-3'>
            <Link onClick={aryanhandle} activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="mobItem">Home</Link>
            <Link onClick={aryanhandle} activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500} className="mobItem">About</Link>
            <Link onClick={aryanhandle} activeClass='active' to='portfolio' spy={true} smooth={true} offset={0} duration={500} className="mobItem">Portfolio</Link>
            <Link onClick={aryanhandle} activeClass='active' to='clint' spy={true} smooth={true} offset={0} duration={500} className="mobItem">Clints</Link>
            <Link onClick={aryanhandle} activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500} className="mobItem">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar