"use client"; 

import { useState } from 'react';
import { RiUserCommunityFill, RiTruckLine } from 'react-icons/ri';
import { BsCash } from 'react-icons/bs';
import { TbTriangleSquareCircle } from 'react-icons/tb';
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';
import uaeImage from '../../../public/assets/images/uae.svg';
import saudiarabiaImage from '../../../public/assets/icons/saudiarabia.svg';
import bahrainImage from '../../../public/assets/icons/bahrain.svg';
import qatarImage from '../../../public/assets/icons/qatar.svg';
import kuwaitImage from '../../../public/assets/icons/kuwait.svg';
import omanImage from '../../../public/assets/icons/oman.svg';
import jordanImage from '../../../public/assets/icons/jordan.svg';
import internationalImage from '../../../public/assets/icons/international.png';

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const countries = [
    {
      title:'UAE',
      img:uaeImage
    },
    {
      title:'Saudi Arabia',
      img:saudiarabiaImage
    },
    {
      title:'Bahrain',
      img:bahrainImage
    },
    {
      title:'Qatar',
      img:qatarImage
    },
    {
      title:'Kuwait',
      img:kuwaitImage
    },
    {
      title:'Oman',
      img:omanImage
    },
    {
      title:'Jordan',
      img:jordanImage
    },
    {
      title:'International',
      img:internationalImage
    },
    
  ]

  return (
    <div className="text-sm sm:text-base bg-sky-900 flex flex-row justify-end sm:justify-between sm:px-16 px-4 items-center p-1">
      
      <div className="sm:hidden p-4" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

     
      <div className="hidden text-xs sm:flex flex-row-reverse items-center justify-center gap-2">
        <p>Community</p>
        <RiUserCommunityFill size={25}/>
      </div>

     
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } text-xs sm:flex sm:flex-row sm:gap-4 absolute sm:static top-12 left-0 w-full sm:w-auto bg-sky-900 sm:bg-transparent p-2 sm:p-0`}
      >
      <div className="sm:hidden text-xs flex flex-row-reverse items-center justify-center gap-2">
        <p>Community</p>
        <RiUserCommunityFill size={25}/>
      </div>

        <div className="flex flex-row-reverse items-center justify-center gap-2 cursor-pointer">
          <p>Free fast delivery</p>
          <RiTruckLine size={25}/>
        </div>

      
        <div className="flex flex-row-reverse items-center justify-center gap-2 cursor-pointer">
          <p>Best prices everyday</p>
          <BsCash size={25}/>
        </div>

        
        <div className="flex flex-row-reverse items-center justify-center gap-2 cursor-pointer">
          <p>Widest choice</p>
          <TbTriangleSquareCircle size={25}/>
        </div>

        <div className="sm:hidden flex flex-row-reverse items-center justify-center gap-2">
          <FaArrowDown />
          <Image src={uaeImage} alt="uae" width={20} height={20} />
          <p>العربیة</p>
        </div>
      </div>

     
      <div className="hidden cursor-pointer relative sm:flex flex-row-reverse items-center justify-center gap-2">
        <FaArrowDown onClick={() => setIsArrowClicked(!isArrowClicked)} />
        <Image src={uaeImage} alt="uae" width={20} height={20} />
        <p>العربیة</p>
      </div>
      <div className={`"
        ${isArrowClicked ? 'block' : 'hidden'}
        flex flex-col bg-white mr-4 rounded-lg text-black absolute top-12 right-0 w-42 z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        "`}>
        {countries.map((country, index) => (
          <div key={index} className={`"
          ${index === 0 ? 'bg-blue-200' : ''}
          w-full flex flex-row items-center gap-4 hover:bg-blue-200 p-4 cursor-pointer transition-all duration-200
          "`}>
            <Image src={country.img} alt={country.title} width={20} height={20} />
            <p>{country.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveNavbar;