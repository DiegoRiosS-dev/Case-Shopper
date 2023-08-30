import { useState } from "react";
import * as style from "./FormStyle";


const Input = ({type, text, name, placeholder, handleOnChange, value}) => {

  const [typeButton, setTypeButt] = useState(type);
  const showPassword = () => {
    typeButton === "password" ?
      setTypeButt("text") : 
      setTypeButt("password")
    ;
  };

  return(
    <style.DivInput>
      <style.InputLabel htmlFor={name}>{text}</style.InputLabel>
      { name === "password" ? 
      <>
        <style.showPassword
          style={typeButton === "password" ? {backgroundColor:"#000"}: {backgroundColor:"#00000044"}}  
          type="button" onClick={() => showPassword()}
        />
        <style.Input
        type = {typeButton}
        id = {name}
        name = {name}
        placeholder = {placeholder}
        onChange = {handleOnChange}
        value = {value}
        required
        />
      </>
       : 
      <style.Input
      type = {type}
      id = {name}
      name = {name}
      placeholder = {placeholder}
      onChange = {handleOnChange}
      value = {value}
      required
    />}
      
    </style.DivInput>
  )
}

export default Input;