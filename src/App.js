import React, {useEffect} from 'react';
import './App.css';
import Header from './components/shared/Header';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from 'providers/AuthProvider';

import store from './store';




const Providers = ({children}) => 
  <Provider store={store}>
    <AuthProvider>
      {children}
    </AuthProvider>
  </Provider>

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  )
}

const App = () => {
  return (
    <Providers>
      <BwmApp />
    </Providers>
  )
}

export default App;
