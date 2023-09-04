import React from 'react'
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import { HomePage } from "../pages/home_Page/HomePage";
import { Login } from "../pages/login_Page/Login";
import { SignUp } from "../pages/sign_up/SignUp";
import { ProfilePage } from "../pages/profile_Page/ProfilePage";
import { CartPage } from "../pages/cart_page/CartPage";



const RoutesPage = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <SignUp/> }/>
        <Route path="/profile" element={ <ProfilePage/> } />
        <Route path="/cart" element={ <CartPage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage;