import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className='flex flex-row justify-between items-center p-4 bg-black/85 h-20 space-x-4 px-8'>
            <h3 className='text-lg items-center text-white font-semibold'>Notation</h3>
            <div className='font-semibold text-white'><Link to='/login'>Login</Link></div>
        </div>
        <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[40%] bg-slate-200 p-12 rounded-xl">
            <h1 className="text-xl font-bold text-left">Create an account</h1>
            <input className="w-full px-4 py-2 border-2 rounded-lg outline-0" type="text" placeholder="Enter your username" />
            <input className="w-full px-4 py-2 border-2 rounded-lg outline-0" type="text" placeholder="Enter your email" />
            <input className="w-full px-4 py-2 border-2 rounded-lg outline-0" type="password" placeholder="Enter your password" />
            <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Register</button>
            <div className="flex justify-center items-center space-x-3">
                <p>Already have an account?</p>
                <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Register