// components/Header.tsx
"use client"
import React, { useState, useEffect, useRef } from 'react';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import DropdownMenu from './Dropdown';
import Slider from './Slider';
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { PiNotepadDuotone } from "react-icons/pi";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-[#2c3640] text-white flex items-center fixed z-10 w-full">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Image src={Logo} alt="Logo" height={100} width={130} className="bg-white" />
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li className="border-r border-r-white pr-5 relative group cursor-pointer">
                OUR GAMES
                <DropdownMenu />
              </li>
              <li className='flex gap-2 items-center hover-effect'>
                <FaHeart className='text-lg icon'/>
                <span className='text'>ABOUT US</span>
              </li>
              <li className='flex gap-2 items-center hover-effect'>
                <IoCart className='text-lg icon'/>
                <span className='text'>SELLERS</span>
              </li>
              <li className='flex gap-2 items-center hover-effect'>
                <FaPhoneAlt className='text-lg icon'/>
                <span className='text'>CONTACT</span>
              </li>
              <li className='flex gap-2 items-center hover-effect'>
                <PiNotepadDuotone className='text-lg icon'/>
                <span className='text'>AUTHOR&apos;S BLOG</span>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </header>
      <div ref={menuRef} className={`fixed top-0 left-0 h-full bg-[#2c3640] text-white z-20 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className='flex justify-between bg-[#0f5684] px-3 py-3 items-center'>
          <span>
            MENU
          </span>
          <HiOutlineX className='text-3xl' onClick={toggleMenu}/>

        </div>
        <ul className="flex flex-col space-y-6 p-6">
          <li className="md:border-b md:border-b-white md:pb-5 cursor-pointer" onClick={toggleMenu}>
            OUR GAMES
            <DropdownMenu />
          </li>
          <li className='flex gap-2 items-center hover-effect' onClick={toggleMenu}>
            <FaHeart className='text-lg icon'/>
            <span className='text'>ABOUT US</span>
          </li>
          <li className='flex gap-2 items-center hover-effect' onClick={toggleMenu}>
            <IoCart className='text-lg icon'/>
            <span className='text'>SELLERS</span>
          </li>
          <li className='flex gap-2 items-center hover-effect' onClick={toggleMenu}>
            <FaPhoneAlt className='text-lg icon'/>
            <span className='text'>CONTACT</span>
          </li>
          <li className='flex gap-2 items-center hover-effect' onClick={toggleMenu}>
            <PiNotepadDuotone className='text-lg icon'/>
            <span className='text'>AUTHOR&apos;S BLOG</span>
          </li>
        </ul>
      </div>
      <Slider />
    </div>
  );
};

export default Header;
