
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css' //IMPORTAMOS EL ARCHIVO CSS PARA ESTILOS
import Home from './views/Home.jsx' //IMPORTAMOS EL COMPONENTE HOME
import Productos from './views/Productos.jsx'
import Login from './views/Login.jsx'
import Registro from './views/Registro.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App
