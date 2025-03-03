import React from 'react'
import { FaBox } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import Link from 'next/link'; 

const SideBar = () => {
  return (
    <div className='bg-sky-800 h-screen w-64 fixed top-0 left-0 overflow-y-auto'>
        <h2 className='text-2xl font-bold text-center pt-4 text-white'>Admin Panel</h2>
        
        <div className='flex justify-start items-center gap-4 p-4 hover:bg-sky-700 cursor-pointer transition-all duration-200'>
           <FaBox />
           <Link href="/dashboard" className='text-white'>Products List</Link>
        </div>
        <div className='flex justify-start items-center gap-4 p-4 hover:bg-sky-700 cursor-pointer transition-all duration-200'>
           <IoIosAdd size={25}/>
           <Link href="/dashboard/add-product" className='text-white'>Add new product</Link>
        </div>
        <div className='flex justify-start items-center gap-4 p-4 hover:bg-sky-700 cursor-pointer transition-all duration-200'>
           <CiEdit size={25}/>
           <Link href="/dashboard/edit-product" className='text-white'>Edit Products</Link>
        </div>
    </div>
  )
}

export default SideBar;
