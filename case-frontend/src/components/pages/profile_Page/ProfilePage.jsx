import React from 'react';
import { Url } from '../../../assets/url';
import { useRequestData } from '../../hoks/useRequestData';
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from '../../hoks/useProtectPage';
import Header from '../../header/Header';
import * as style from "./styleProfile";


export const ProfilePage = () => {
  useProtectedPage()
  const userId = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data,isLoad,errordata] = useRequestData(Url.clientOrder+userId);

  const renderList = data && !isLoad && data.sort( (a,b) => {
    if( a.name < b.name ){
      return -1
    } else{
      return true
    }
  }).map( (order) => {
    return (
      <style.Order_List key={order.id}>
        <style.Order>{order.name}</style.Order>
        <style.Order>{order.order_date}</style.Order>
      </style.Order_List>
    )
  })

  return (
  <React.Fragment>
  <Header/>
  <style.Profile_Control>
    <style.TitleProfile>Todos seus pedidos</style.TitleProfile>
    {!isLoad && data.length === 0 && <style.TitleProfile>Você  não fez nenhum pedido ainda</style.TitleProfile>}
    {!isLoad && data && 
      <style.Div_Order_List>
        <style.Div_Order_Type>
        <style.ordertType>Nome</style.ordertType>
        <style.ordertType>Dia Pedido</style.ordertType>
        </style.Div_Order_Type>
        {renderList}
      </style.Div_Order_List>
    }
    {isLoad && <style.Div_Load>
        <style.Load>Carregando</style.Load>
      </style.Div_Load>}
    {!isLoad && errordata && <p>{errordata}</p>}
  </style.Profile_Control>
  </React.Fragment>
  )
};

