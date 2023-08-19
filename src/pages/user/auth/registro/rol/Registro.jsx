import React from 'react'
import RegistroDsk from './RegistroDsk'
import RegistroMb from './RegistroMb'

const Registro = () => {
  return (
     <>
   <div className="hidden md:block">
    <RegistroDsk/>
   </div>
   <div className="md:hidden">
  <RegistroMb/>
   </div>
   </>
  )
}

export default Registro