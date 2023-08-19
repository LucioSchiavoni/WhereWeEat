import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePublic/Home'
import RegistroTurista from './pages/user/auth/registro/registroTurista/RegistroTurista'
import PerfilTurista from './pages/user/perfil/turista/PerfilTurista'
import CrearResenia from './pages/user/resenias/crearResenias/CrearResenia'
import MisResenias from './pages/user/resenias/misResenias/MisResenias'
import RegistroRestaurante from './pages/user/auth/registro/registroRestaurante/RegistroRestaurante'
import Registro from './pages/user/auth/registro/rol/Registro'
import Login from './pages/user/auth/login/rol/Login'
import LoginRestaurante from './pages/user/auth/login/restaurante/LoginRestaurante'
import LoginTurista from './pages/user/auth/login/turista/LoginTurista'
import PerfilRestaurante from './pages/user/perfil/restaurante/PerfilRestaurante'
import HomeAuth from './pages/user/auth/home/HomeAuth'
import TodoState from './context/todoState'
import HomeAuthDsk from './pages/user/auth/home/HomeAuthDsk'



function App() {


  return (
    <>
    <TodoState>
    <BrowserRouter> 
    <Routes>
 {/* Home  */}
<Route path='/' element={<Home/>} />
<Route path='/authDesk' element={<HomeAuthDsk/>}/>
{/* Registro */}
<Route path='/rolRegistro' element={<Registro/>} />
<Route path='/registroTurista' element={<RegistroTurista/>}/>
<Route path='/registroRestaurante' element={<RegistroRestaurante/>} />
{/* Login */}
<Route path='/rolLogin' element={<Login/>} />
<Route path='/loginRestaurante' element={<LoginRestaurante/>} />
<Route path='/loginTurista' element={<LoginTurista/>}/>
{/* Perfiles */}
<Route path='/perfilTurista' element={<PerfilTurista/>}/>
<Route path='/perfilRestaurante' element={<PerfilRestaurante/>} />
{/* Resenias */}
<Route path='/crearResenia' element={<CrearResenia/>} />
<Route path='/misResenias' element={<MisResenias/>}/>
    </Routes>
    </BrowserRouter>
     </TodoState>
    </>
  )
}

export default App
