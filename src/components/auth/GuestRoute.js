
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';


const GuestRoute = ({children,props, ...rest}) => {
  const authService = useAuth();
  const onlyChild = React.Children.only(children);
  return (
    !authService.isAuthenticated() ?
       React.cloneElement(onlyChild, {...rest, ...props}) : 
       <Navigate to='/'/> 
  )
}

export default GuestRoute;