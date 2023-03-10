
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';


const AuthRoute = ({children, props, ...rest}) => {
  const authService = useAuth();
  const onlyChild = React.Children.only(children);
  return (
    authService.isAuthenticated() ?
    React.cloneElement(onlyChild, {...rest, ...props}) : <Navigate to='/login' />
  )
}

export default AuthRoute;