
import { Route, Routes } from 'react-router-dom'
import './App.css' //IMPORTAMOS EL ARCHIVO CSS PARA ESTILOS
import Home from './views/Home.jsx' //IMPORTAMOS EL COMPONENTE HOME


  function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
