
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';


const AuthRoute = ({component: Component, props, ...rest}) => {
  const authService = useAuth();
  return (
    authService.isAuthenticated() ?
    <Component {...rest} {...props}/> : <Navigate to='/login' />
  )
}

export default AuthRoute;