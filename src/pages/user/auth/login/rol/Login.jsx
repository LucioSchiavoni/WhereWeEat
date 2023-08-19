import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

    
  return (
    <>
   <div className='bg-white fixed w-full h-full bg-cover'>
    <Link to='/'>
    <button className='px-4 py-1 rounded-lg shadow-xl border font-bold absolute top-8 md:w-40 left-8 text-black'>Volver</button>
    </Link>
    <div className='md:w-2/12 w-64 m-auto md:m-auto mt-40  md:mt-64'>
       <form action="" >
      <div className='flex flex-col mb-4  text-black'>
        <label htmlFor="" className='font-bold md:text-2xl'>Email</label>
      <input type="text" className='border px-4 py-2 rounded-lg shadow-xl bg-white ' placeholder='email' />
      </div>
       <div className='flex flex-col mb-4  text-black'>
        <label htmlFor="" className='font-bold md:text-2xl'>Password</label>
      <input type="text" placeholder='Password'  className=' border px-4 py-2 rounded-lg shadow-xl  bg-white'/>
      </div>
    </form>
    </div>
   
   </div>
   </>
  )
}

export default Login