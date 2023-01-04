import React from 'react';
import { Routes, Route } from "react-router-dom";

import AuthRoute from 'components/auth/AuthRoute';

import RentalDetail from './pages/RentalDetail';
import RentalHome from './pages/RentalHome';
import RentalNew from 'pages/RentalNew';
import Login from './pages/Login';
import Register from './pages/Register';
import SecretPage from 'pages/SecretPage';

const AppRoutes = () => {
  return (
    <div className="container bwm-container">
      <Routes>
        <Route path="/" element={<RentalHome />} />
        <Route path="/rentals/new" element={<AuthRoute><RentalNew/></AuthRoute>}></Route>
        <Route path="/rentals/:id" element={<RentalDetail />} />
        <Route path="/secret" element={<AuthRoute><SecretPage/></AuthRoute>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;