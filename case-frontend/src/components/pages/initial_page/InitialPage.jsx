import React from "react";
import * as style from "./styleInitialP"
import { useNavigate } from "react-router-dom";

export const InitialPage = () => {
  const navigate = useNavigate();
  setTimeout( () => navigate("/home"), 4000);

  return (
  <style.Div_Loading>
    <style.Title_Div>
      <style.Loading_Title>Oxente</style.Loading_Title>
    </style.Title_Div>
    <style.Loading/>
  </style.Div_Loading>
  )
}