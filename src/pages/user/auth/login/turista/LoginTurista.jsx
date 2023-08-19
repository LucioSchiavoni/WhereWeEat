import React from 'react'


const LoginTurista = () => {
  return (
     <>
     <div className='bg-white fixed h-full w-full  '>

      <form action="" className='p-8 w-3/12 m-auto mt-64 border'>
  <div className='flex flex-col mb-8 font-bold text-black'>
   
    <label htmlFor="">Usuario</label>
    <input type="text" className='bg-white border border-red-800 px-4 py-1 rounded-full' placeholder=''/>
  </div>
  <div className='flex flex-col mb-4 font-bold text-black'>
    <label htmlFor="">Contrasena</label>
    <input type="text" className='bg-white border border-red-800 px-4 py-1 rounded-full' placeholder='' />
    
  </div>
  </form>
  </div>
   </>
  )
}

export default LoginTurista