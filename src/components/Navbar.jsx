import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io"

const Navbar = () => {
  return (
    <>
        <div className='flex flex-row justify-between items-center p-4 bg-black/85 h-20 space-x-4 px-8'>
            <h3 className='text-lg items-center text-white font-semibold'><Link to='/'>Notation</Link></h3>
            <div className='bg-gray-200 flex flex-row rounded-2xl'>
                <input type="text" className='bg-gray-200 rounded-2xl outline-none px-3'/>
                <p className='h-[30px] w-[30px] flex justify-center items-center cursor-pointer rounded-full bg-slate-300 group hover:bg-slate-500 '><IoMdSearch className=' group-hover:text-white'/></p>
            </div>
            <div className='font-semibold text-white'>Logout</div>
        </div>
    </>
  )
}

export default Navbar