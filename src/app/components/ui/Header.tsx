import React from 'react'
import mumzworldImage from '../../../../public/assets/images/mumzworld.png'
import { LuSearch } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import ResponsiveNavbar from '../ResponsiveNavbar';

export default function Header() {

  const options = [
    "SALE",
    "GEAR",
    "BEFROOM",
    "FEEDING",
    "DIAPERS",
    "TOYS",
    "OUTDOOR",
    "BATH",
    "SAFETY",
    "KIDS FASHION",
    "SCHOOL",
    "MUMZ",
    "HOME",
    "BOOKS",
    "PARTY",
    "PANTRY"
  ]


  return (
    <div className='text flex flex-col'>
      <ResponsiveNavbar />
      <div className='w-full flex flex-col sm:flex-row justify-center px-10 items-center gap-4 border-b-2'>
          <img src={mumzworldImage.src} alt="mumzworld" className='w-50 h-50'/>

        <div className='w-full flex flex-row text-black items-center border-1 border-gray-400 rounded-full justify-start gap-2 p-2'>
          <div className='flex flex-row items-center justify-center bg-blue-500 rounded-full p-2 text-white'>
            <LuSearch size={25}/>
          </div>
          <input type="text" placeholder='Search for anything?' className='outline-none w-full' />
        </div>

        <div className='w-50 flex flex-row text-black items-center justify-center gap-2'>
          <SlLocationPin size={25}/>
          <p className='text-sm'>Delivering to <br/><span className='font-bold'>Dubai </span></p>
        </div>

        <div className='w-full flex-1 text-white rounded-2xl p-2 flex flex-col sm:flex-row items-center justify-center gap-8'>
          <div className="w-75 sm:w-42 bg-blue-500 rounded-2xl p-2 flex flex-row items-center justify-center gap-2">
            <CiUser size={35}/>
            <p>Sign in</p>
          </div>
          <div className="text-gray-400 flex flex-col items-center justify-center">
            <BsCart3 size={25}/>
            <p>Cart</p>
          </div>
        </div>
      </div>
        <div className='text-black flex flex-row flex-wrap justify-center items-center gap-4 border-b-1 border-gray-300'>
         {
            options.map((option, index) => (
              <p key={index} className={`
                ${index === 0 ? 'bg-red-500 text-white p-2 cursor-pointer'
                : 'hover:bg-sky-200 hover:cursor-pointer hover:text-blue-950 p-2 font-mono'}`}
                >{option}</p>
            ))
          } 
      </div>
    </div>
  )
}
