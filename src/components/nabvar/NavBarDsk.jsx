import React from 'react'
import { Link } from 'react-router-dom'
const NavBarDsk = () => {
  return (
    <div className='w-full p-4 bg-white flex  '>

        <Link to='/' >
              <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo"
                className='w-14'  />
        </Link>
        
    </div>
  )
}

export default NavBarDsk