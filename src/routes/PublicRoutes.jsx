import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = ({ isAuth, redirectPath, children }) => {

  if (isAuth) return <Navigate to={redirectPath} />

  return (
    <>
      { children ? children : <Outlet /> }
    </>
  )
}

export default PublicRoute
