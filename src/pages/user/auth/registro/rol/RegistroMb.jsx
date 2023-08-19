import React, { useEffect } from 'react'
import '../../../../../App.css'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../../../App.css'
import ButtonBack from '../../../../../components/Buttons/ButtonBack';
const RegistroMb = () => {

  


  return (
    <>
<div className='layout-image fixed bg-cover h-screen w-full '>
   <h1 className='text-center mt-64 font-bold text-3xl text-zinc-100'>Registrate</h1>
<p className='text-center text-white mt-8 font-bold'>Como:</p>
<div className='flex  items-center justify-center   gap-5 mt-2'>
   
<Link to='/registroTurista'>
<button  className='border bg-white border-red-800 shadow-lg shadow-gray-800 border border-gray-400  font-bold w-40 text-black rounded-full px-4 py-2 '>Turista</button>
</Link>
  <Link to='/registroRestaurante'>
  <button className='font-bold bg-white border shadow-lg shadow-gray-800  border-red-800  text-black rounded-full border border-white  px-4 py-2 w-40'>Restaurante</button></Link>

</div>

    <Link to='/' >
    <button className='absolute top-4 rounded-lg w-24 bg-red-800 py-2 text-white border boder-white left-4'>Volver</button>
    </Link>

</div>

    </>
    
  )
}

export default RegistroMb