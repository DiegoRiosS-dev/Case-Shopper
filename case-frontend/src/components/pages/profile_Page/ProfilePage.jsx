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

  data && data.map( (o) => {/// funcao adiciona um 0 ao dia; :)
    if(o.order_date[0] < 10 && o.order_date[1] === "/"){
      o.order_date = `0${o.order_date}`
    }
  });
  const renderList = data && !isLoad && data.sort( (a,b) => {
    const day = a.order_date[0] + a.order_date[1];
    const month = a.order_date[3] +a.order_date[4];
    const year = a.order_date[6] + a.order_date[7] + a.order_date[8] + a.order_date[9]
    const date = new Date(`${month}-${day}-${year}`)
    // --- // olha a gambiarra que fiz pra fazer funcionar a ordenacao por data :)
    const day2 = b.order_date[0] + b.order_date[1];
    const month2 = b.order_date[3] +b.order_date[4];
    const year2 = b.order_date[6] + b.order_date[7] + b.order_date[8] + b.order_date[9]
    const date2 = new Date(`${month2}-${day2}-${year2}`)
    if( date < date2 ){
      return -1
    } else{
      return true
    }
      // vou deixar isso abaixo comitado para provar que a gambiarra de cima é necessario :)
    // if (a.order_date > b.order_date) {
    //   return -1;
    // }
    // if (a.order_date < b.order_date) {
    //   return 1;
    // }
    // return 0;
  }).map( (order) => {
    return (
      <style.Order_List key={order.id}>
        <style.Order>{order.name}</style.Order>
        <style.Order>{order.order_date}</style.Order>
      </style.Order_List>
    )
  })// ------------- //
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

