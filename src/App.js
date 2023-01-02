import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { AuthProvider } from 'providers/AuthProvider';

import store from './store';




const App = () => {



  return (
    // <Router>
    //   <Header />
    //   <AppRoutes />
    // </Router>
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Header />
          <AppRoutes />
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
