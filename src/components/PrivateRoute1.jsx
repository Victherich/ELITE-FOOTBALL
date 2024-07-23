import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute1 = () => {
  const userToken = useSelector(state => state.userToken); // Adjust the path if needed

  console.log(userToken);

  return userToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute1;
