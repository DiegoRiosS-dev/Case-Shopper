import React from 'react'
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../hoks/useProtectPage';
import Header from '../../header/Header';

export const ProfilePage = () => {
  const navigate = useNavigate();

  useProtectedPage()
  // login de teste feijao@22.com Calamanaia
  return (
  <React.Fragment>
    <Header/>
    <h1>Isso é o cliente</h1>
  </React.Fragment>
  )
}

