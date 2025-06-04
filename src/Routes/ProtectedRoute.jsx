import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';  

function ProtectedRoute({ children }) {          
  const loginStatus = useSelector((state) => state.authslices.isloggedin); 
  console.log("authslice",loginStatus)
    
  if (!loginStatus) {
    return <Navigate to="/login" replace />;    
  }

  return children;                              
}

export default ProtectedRoute;
