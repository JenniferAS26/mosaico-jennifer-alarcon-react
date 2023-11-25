import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'

const PrivateRoutes = ({ children }) => {

  const { logged } = useContext( AuthContext )

  return (logged)
    ? children
    : <Navigate to='/sign-in' />
}

export default PrivateRoutes
