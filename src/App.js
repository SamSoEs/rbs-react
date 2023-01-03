import React, { useEffect } from 'react';
import './App.css';
import Header from './components/shared/Header';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { AuthProvider, useAuth } from 'providers/AuthProvider';
import { MapProvider } from 'providers/MapProvider';

import store from './store';




const Providers = ({ children }) =>
  <Provider store={store}>
    <AuthProvider>
      <MapProvider apiKey="pDL17UKAyGVSWBAOwIWLuO23fhwobAqx">
        {children}
      </MapProvider>
    </AuthProvider>
  </Provider>

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut} />
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
