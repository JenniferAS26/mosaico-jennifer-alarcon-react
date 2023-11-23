import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import './styles.sass'


const Layout = () => {
  return (
    <section className='layout'>
      <Outlet />
      <Navbar />
    </section>
  )
}

export default Layout
