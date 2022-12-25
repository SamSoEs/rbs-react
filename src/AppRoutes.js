import React from 'react';
import { Routes, Route } from "react-router-dom";

import RentalHome from './pages/RentalHome';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRoutes = () => {
  return (
    <div className="container bwm-container">
      <Routes>
        <Route path="/" element={<RentalHome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes;