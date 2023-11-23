import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import Layout from '../components/Layout'
import ReactBasicModule from '../pages/ReactBasicModule'
import TodoList from '../pages/TodoList'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='basic-module' element={<ReactBasicModule />} />
        <Route path='todo-list' element={<TodoList />} />
      </Route>
      <Route path='welcome' element={<Welcome />} />
    </Routes>
  )
}

export default AppRoutes
