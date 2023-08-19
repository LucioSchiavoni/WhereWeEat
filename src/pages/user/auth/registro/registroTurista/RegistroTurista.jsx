import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import todoContext from '../../../../../context/todoContext'
import Mensaje from '../../../../../components/alertas/Mensaje'

const RegistroTurista = () => {

    const TodoContext = useContext(todoContext);
    const {mensaje, registrarUsuario} = TodoContext;

    const formik = useFormik({

      initialValues: {
        alias: '',
        email: '',
        contrasenia: '',
        nacionalidad: '',
        urlImg: '',
        idUsuario: '',
      },
        validationSchema: Yup.object({
            alias: Yup.string().required("El campo no puede ir vacio"),
            email: Yup.string().email("El campo debe ser de tipo email").required("El campo no puede ir vacio"),
            contrasenia: Yup.string().required("El campo no puede ir vacio").min(8, "La contraseña debe contener 8 caracteres"),
            nacionalidad: Yup.string().required("El campo no puede ir vacio"),
            urlImg: Yup.string().required("El campo no puede ir vacio"),
            idUsuario: Yup.string().required("El campo no puede ir vacio"),
        }),


      onSubmit: valores => {
        
          const dataUser = {
        accion: "altaTurista",  //endpoint
        idUsuario: valores.idUsuario,
        alias: valores.alias,
        email: valores.email,
        contrasenia: valores.contrasenia,
        nacionalidad: valores.nacionalidad,
        rol: 'turista',
        urlImg: valores.urlImg,
        activo: 1,
        bloqueado: 2,
    };
        console.log(dataUser)
        registrarUsuario(dataUser)
       
      
      }
      
    })

  return (
  <div className='bg-white fixed h-full w-full  text-black'>

  <Link to='/rolRegistro'  >
    <button className='border rounded-lg ml-4 px-4 py-1 mt-2 mb-4 top-16 md:absolute md:left-80 md:w-40 md:py-2 md:shadow-xl md:border-gray-400'>Volver</button>
    </Link>
<div className=' flex justify-center md:block md:w-3/12 md:m-auto md:mt-40'>
  <div> {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }</div>
    <form onSubmit={formik.handleSubmit}  className='text-black ' encType='multipart/form-data' method='POST' >

        <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Alias</label>
        <input type="text" placeholder='Alias' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='alias' value={formik.values.alias} onChange={formik.handleChange}  onBlur={formik.handleBlur}  />
        {formik.touched.alias && formik.errors.alias ? (
          <div> <p className='text-sm px-5 text-gray-400'> {formik.errors.alias}</p></div> ): (
            null
          )
        }
        </div>
        <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Email</label>
        <input type="text" placeholder='Email' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? (
          <div> <p className='text-sm px-5 text-gray-400'> {formik.errors.email}</p></div> ): (
            null
          )
        }
        </div>
          <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Contraseña</label>
        <input type="password" placeholder='Contraseña' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='contrasenia' value={formik.values.contrasenia} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.contrasenia && formik.errors.contrasenia ? (
          <div> <p className='text-sm px-5 text-gray-400'>{formik.errors.contrasenia}</p></div> ) : (null)
        }
        </div>

        <div className='flex flex-col mb-2 '>
      <label htmlFor="country-select" className=' font-bold px-4'>Nacionalidad</label>
       <input type="text" placeholder='Nacionalidad'  className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='nacionalidad' value={formik.values.nacionalidad} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.nacionalidad && formik.errors.nacionalidad ? (
          <div> <p className='text-sm px-5 text-gray-400'> {formik.errors.nacionalidad}</p></div> ): (
            null
          )
        }
    </div>
    <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Foto de perfil</label>
        <input type="text" placeholder='foto' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic ' id='urlImg' value={formik.values.urlImg} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
         {formik.touched.urlImg && formik.errors.urlImg ? (
          <div> <p className='text-sm px-5 text-gray-400'> {formik.errors.urlImg}</p></div> ): (
            null
          )
        }
        </div>

        <div className='flex flex-col mb-2'>
        <label htmlFor="" className='font-bold px-4'>Id usuario</label>
        <input type="text" placeholder='Id' value={formik.values.idUsuario} onChange={formik.handleChange}  className='border rounded-full bg-white  border-red-700  px-6 py-2 focus:outline-none placeholder:italic' id='idUsuario' onBlur={formik.handleBlur} />
         {formik.touched.idUsuario && formik.errors.idUsuario ? (
          <div> <p className='text-sm px-5 text-gray-400'> {formik.errors.idUsuario}</p></div> ): (
            null
          )
        }
        </div>
        <button type='submit' className='px-4 md:ml-8 md:w-40 md:shadow-xl md:border-gray-400 md:mt-10 py-2 rounded-lg bg-white border font-bold '>Registrar</button>
    </form>
</div>
  </div>
  )
}

export default RegistroTurista;