import React from 'react'
import { Link } from 'react-router-dom'

const CreatePost = () => {
  return (
    <div>
        <div className='flex flex-row justify-between p-4 bg-black/85 h-20 space-x-4 px-8 items-center'>
            <h3 className='text-lg items-center text-white font-semibold'><Link to='/dashboard'>Notation</Link></h3>
        </div>
        <div className='bg-gray-50 w-[100%]'>
            <div className='flex flex-row p-8'>
                <h5 className='text-black font-mono p-4'>Label:</h5>
                <input type="text" placeholder='Enterscn title' className='p-4 outline-none rounded-lg w-[100%]'/>
            </div>
            <div className='flex flex-col p-8'>
                <h5 className='text-black font-mono p-4'>Description:</h5>
                <textarea className='p-4 outline-none rounded-lg w-[100%]' placeholder='Enter note' cols="30" rows="17"></textarea>
            </div>
        </div>
        <div className='items-center flex flex-row justify-center bg-gray-50'>
        <button className='bg-blue-300 text-white w-[200px] h-[60px] p-4 mb-6 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer'>
            Save
        </button>
        </div>
    </div>
  )
}

export default CreatePost