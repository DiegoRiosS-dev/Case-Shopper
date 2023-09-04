import { useNavigate } from "react-router-dom";
import * as style from "./styleHeader";
import { useState, useEffect } from "react";



const Header = () => {
  const navigate = useNavigate();
  const url = window.location.href;

  const [logged, setLogged] = useState(false);
  const [count, setCount] = useState(0)

  useEffect( ()=> {
    const token = localStorage.getItem("token")
    if(token) {
      setLogged(true)
    }else{
      setLogged(false)
    }
  },[count,url]);
  const logout = () => {
    localStorage.removeItem("token")
    setCount(count+1)
    url.includes("profile") ? navigate("/login") : {}
  };
  
  return (
    <style.Main_Div_Header>
      <style.Nav_Bar>
        <style.Nav_div> 
          <style.Nav_List>
            <style.List>
              <style.Link 
                onClick={() => navigate("/")}
                style={url[url.length -1] === "/"  ? {borderBottom:"2px solid #0771d5"}:{border:"none"}}
              > Inicio
              </style.Link>
            </style.List>
            <style.List>
              <style.Link
                style={url.includes("profile") ? {borderBottom:"2px solid #0771d5"}:{border:"none"}}
                onClick={() => navigate("/profile")}
              > Perfil
              </style.Link>
            </style.List>
            <style.List>
              <style.Link 
                style={url.includes("cart") ? {borderBottom:"2px solid #0771d5"}:{border:"none"}}
                onClick={() => navigate("/cart")}
              > Carrinho
              </style.Link>  
            </style.List>
          </style.Nav_List>
        </style.Nav_div>   
        <style.Nav_div> 
          <style.Nav_List> 
            {logged && 
            <style.List >
              <style.Link 
                style={url.includes("login") ? {borderBottom:"2px solid #0771d5"}:{border:"none"}}
                onClick={() => logout()}
              > Sair
              </style.Link>
            </style.List>
            }
            {!logged &&
            <style.List >
              <style.Link 
                style={url.includes("login") ? {borderBottom:"2px solid #0771d5"}:{border:"none"}}
                onClick={() => navigate("/login")}
              > Login
              </style.Link>
            </style.List>}
          </style.Nav_List>
        </style.Nav_div>    
      </style.Nav_Bar>
    </style.Main_Div_Header>
  )
}


export default Header;