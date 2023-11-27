import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import Layout from '../components/Layout'
import ReactBasicModule from '../pages/ReactBasicModule'
import TodoList from '../pages/TodoList'
import ProductDetail from '../pages/ProductDetail'
import SignIn from '../auth/pages/SignIn'
import SignUp from '../auth/pages/SignUp'
import PrivateRoutes from './PrivateRoutes'
import { AuthContext } from '../auth/context/AuthContext'
import PublicRoutes from './PublicRoutes'
import EditAccount from '../pages/EditAccount'

const AppRoutes = () => {
  const { logged } = useContext( AuthContext )
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='basic-module' element={<ReactBasicModule />} />
          <Route path='todo-list' element={
            <PrivateRoutes>
              <TodoList />
            </PrivateRoutes>
          } />
          <Route path='edit-account' element={
            <PrivateRoutes>
              <EditAccount />
            </PrivateRoutes>
          } />
      </Route>
      <Route element={<PublicRoutes isAuth={logged} />}>
        <Route path='welcome' element={<Welcome />} />
        <Route path='product-detail/:id' element={<ProductDetail />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
