import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import URL from '../url'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        try{
            const res = await axios.post(`${URL}/login`,{email, password})
            setEmail(res.data.email)
            setPassword(res.data.password)
            navigate('/dashboard')
            setError(false)
        }
        catch(err){
          setError(true)
          console.log(err)
        }
    }
  return (
    <>
        <div className='flex flex-row justify-between items-center p-4 bg-black/85 h-20 space-x-4 px-8'>
            <h3 className='text-lg items-center text-white font-semibold'><Link to='/'>Notation</Link></h3>
            <div className='font-semibold text-white'><Link to='/'>Register</Link></div>
        </div>
        <div className="w-full flex justify-center items-center h-[80vh]">
            <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[40%] bg-slate-200 p-12 rounded-xl">
                <h1 className="text-xl font-bold text-left">Login to your account</h1>
                <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 rounded-lg outline-0" type="text" placeholder="Enter your email" />
                <input onChange={(e)=>setPassword(e.target.value)}className="w-full px-4 py-2 border-2 rounded-lg outline-0" type="password" placeholder="Enter your password" />
                <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Login</button>
                <div className="flex justify-center items-center space-x-3">
                    <p>Create an account</p>
                    <p className="text-gray-500 hover:text-black"><Link to="/">Register</Link></p>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Register