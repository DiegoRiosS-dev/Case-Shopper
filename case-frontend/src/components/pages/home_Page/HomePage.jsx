import React from 'react'
import { useNavigate } from "react-router-dom";
import { Login } from '../login_Page/Login';

export const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <h1>Aqui é o home</h1>
    
  )
}

