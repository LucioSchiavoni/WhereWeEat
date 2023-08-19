import React, { useEffect } from 'react'
import '../../../../../App.css'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../../../App.css'

const RegistroDsk = () => {

  


  return (
    <>
<div className='bg-[url(https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg?w=2000)]  absolute bg-cover w-full h-full '>
   <h1 className='text-center mt-64 font-bold text-4xl text-red-800'>Registrate</h1>
<p className='text-center text-red-800 text-2xl font-bold mt-20'>Como:</p>
<div className='flex  items-center justify-center   gap-5 mt-8'>
   
<Link to='/registroTurista'>
<button  className=' bg-white shadow-lg shadow-gray-800  font-bold w-64 py-3 text-black rounded-full px-4 py-2 '>Turista</button>
</Link>
  <Link to='/registroRestaurante'>
  <button className='font-bold bg-white shadow-lg shadow-gray-800   text-black rounded-full  w-64 py-3   px-4 py-2 w-40'>Restaurante</button></Link>

</div>

    <Link to='/' >
    <button className='absolute top-4 rounded-lg w-24 bg-red-800 py-2 text-white border border-gray-400 left-4 font-bold'>Inicio</button>
    </Link>

</div>

    </>
    
  )
}

export default RegistroDsk