import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = ({ children }) => {
    const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn)
    return isUserLoggedIn ? children : <Navigate to="/login" />
}