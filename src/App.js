import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import Provider from './store/Provider';
import {initStore} from './store';

const store = initStore();


const App = () => {



  return (
    // <Router>
    //   <Header />
    //   <AppRoutes />
    // </Router>
    <Provider store={store}>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
  </Provider>
  );
}

export default App;
