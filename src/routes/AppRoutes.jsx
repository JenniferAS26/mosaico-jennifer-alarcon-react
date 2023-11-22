import { Routes, Route } from 'react-router-dom'
import MiComponente from '../components/MiComponente'
import MiContador from '../components/MiContador'
import MisProductos from '../components/MisProductos'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='welcome' element={<Welcome />} />
      <Route path='micomponente' element={<MiComponente />} />
      <Route path='micontador' element={<MiContador />} />
      <Route path='misproductos' element={<MisProductos />} />
    </Routes>
  )
}

export default AppRoutes
