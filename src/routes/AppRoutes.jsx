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

const AppRoutes = () => {
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
      </Route>
      <Route path='welcome' element={<Welcome />} />
      <Route path='product-detail/:id' element={<ProductDetail />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes
