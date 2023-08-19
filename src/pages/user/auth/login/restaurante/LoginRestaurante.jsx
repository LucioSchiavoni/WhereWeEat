import React from 'react'
import LoginDsk from './LoginDsk'
import LoginMb from './LoginMb'

const LoginRestaurante = () => {
  return (
    <>
   <div className="hidden md:block">
   <LoginDsk/>
   </div>
   <div className="md:hidden">
    <LoginMb/>
   </div>
   </>
  )
}

export default LoginRestaurante