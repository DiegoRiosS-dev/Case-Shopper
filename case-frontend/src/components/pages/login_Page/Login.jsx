import React, { useState } from "react";
import { useSubmitDataForm } from "../../hoks/useSubmitFormDate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as style from "./styleLogin"
//////---------------------------//////////
import Input from "../../form/Input";
import { Form_Control } from "../../form/FormStyle";
import Button from "../../button/Button";
import Header from "../../header/Header";
import { Url } from "../../../assets/url";



export const Login = () => {
  const navigate = useNavigate();
  const [dataLogin, onChange, clear ] = useSubmitDataForm( { email: "", password: ""});
 

  const login = (event) => {
    event.preventDefault()
    axios
      .post(Url.login,dataLogin)
      .then( (response) => {
        localStorage.setItem("token",response.data.token)
        navigate("/")
      }).catch( (error) => {
        alert(error.response.data)
      })
  };
  ///----------// ------- ///// ---------/////
  return(
  <React.Fragment>
    <Header/>
    <style.Div_Control_Login>
      <style.TitleLogin>Acesse sua conta</style.TitleLogin>
      <Form_Control onSubmit={ login }>
        <Input 
          type = {"email"}
          text = {"email:"}
          name = {"email"}
          placeholder = {"Insira seu email"}
          value = {dataLogin.email}
          handleOnChange = { onChange }
          pattern="[a-z0-9A-Z._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <Input 
          type = {"password"}
          text = {"senha:"}
          name = {"password"}
          placeholder = {"Insira sua senha"}
          value = {dataLogin.password}
          handleOnChange = { onChange }
        />
        <Button type="submit">Continuar </Button>
      </Form_Control>
      <style.LinkCreateAccount onClick={()=> navigate("/signup")}>Crie uma conta</style.LinkCreateAccount>
    </style.Div_Control_Login>
  </React.Fragment>
  )
}
