import { Link } from "react-router-dom"

const RegistroRestaurante = () => {
  return (
   <>
 <div className='bg-white fixed h-full w-full  text-black'>
<Link to='/rolRegistro'>
<button className="px-5 md:w-40 font-bold left-6 py-1 m-2 rounded-lg border shadow-xl absolute top-3">Volver</button>
</Link>
 
<div className=' flex justify-center mt-24 md:block md:w-3/12 md:m-auto md:mt-40'>

    <form  className='text-black '>

        <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Alias</label>
        <input type="text" placeholder='Alias' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id=''   />
       
        </div>
        <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Email</label>
        <input type="text" placeholder='Email' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic'  />
       
        </div>
          <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Contraseña</label>
        <input type="password" placeholder='Contraseña' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic'  />
    
        </div>

        <div className='flex flex-col mb-2 '>
      <label htmlFor="country-select" className=' font-bold px-4'>Nacionalidad</label>
       <input type="text" placeholder='Nacionalidad'  className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic'  />
       
        
    </div>
    <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Foto de perfil</label>
        <input type="text" placeholder='foto' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic '  />
    
        </div>

        <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Id usuario</label>
        <input type="text" placeholder='Id'   className='border rounded-full bg-white  border-red-700  px-6 py-2 focus:outline-none placeholder:italic'  />
    
        </div>
        <button type='submit' className='px-4 md:ml-8 md:w-40 md:shadow-xl md:border-gray-400 md:mt-10 py-2 rounded-lg bg-white border font-bold mt-5'>Registrar</button>
    </form>
</div>
  </div>
   </>
  )
}

export default RegistroRestaurante