import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as style from "./styleSignUp"
import Input from "../../form/Input";
import { Form_Control } from "../../form/FormStyle";
import Button from "../../button/Button"; 
import { useSubmitDataForm } from '../../hoks/useSubmitFormDate';
import Header from '../../header/Header';
import { Url } from '../../../assets/url';

export const SignUp = () => {
  const navigate = useNavigate();
  const [signUp, onChange, clear] = useSubmitDataForm({ name: "", email: "", password: ""});

  
  const createAccout = (event) => {
    event.preventDefault();;
    axios
      .post(Url.createClient,signUp)
      .then( (response) => {
        localStorage.setItem("token",response.data.token)
        alert("Você sera redirecionado para pagina inicial!")
        navigate("/")
      }).catch( (error) => {
        alert(error.response.data)
      })
  };

  return (
  <React.Fragment>
    <Header/>
    <style.Div_Control_SignUp>
      <style.TitleSignUp>Crie sua conta</style.TitleSignUp>
      <Form_Control onSubmit={ createAccout }>
        <Input 
          type = {"text"}
          text = {"nome:"}
          name = {"name"}
          placeholder = {"Insira seu nome"}
          value = {signUp.name}
          handleOnChange = { onChange }
        />
        <Input 
          type = {"email"}
          text = {"email:"}
          name = {"email"}
          placeholder = {"Insira seu email"}
          value = {signUp.email}
          handleOnChange = { onChange }
          pattern="[a-z0-9A-Z._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <Input 
          type = {"password"}
          text = {"senha:"}
          name = {"password"}
          placeholder = {"Insira sua senha"}
          value = {signUp.password}
          handleOnChange = { onChange }
        />
        <Button type="submit">Criar</Button>
      </Form_Control>
    </style.Div_Control_SignUp>
  </React.Fragment>
  )
}

