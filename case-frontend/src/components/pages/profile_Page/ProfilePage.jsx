import React from 'react'
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../hoks/useProtectPage';

export const ProfilePage = () => {
  const navigate = useNavigate();

  useProtectedPage()
 
  return (
    <h1>Isso é o cliente</h1>
  )
}

