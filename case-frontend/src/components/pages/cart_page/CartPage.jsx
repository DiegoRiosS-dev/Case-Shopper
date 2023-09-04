import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../header/Header';
import Button from "../../button/Button"
import * as style from './styleCart';
import { cartFunctions } from '../../../assets/cartFunctions';
import Input from '../../form/Input';
import { useSubmitDataForm } from '../../hoks/useSubmitFormDate';


export const CartPage = () => {
  const navigate = useNavigate();
  const {updateQuantProduct, clearCart, sendOrder,  productList, orderMessage }  = cartFunctions();
  const [dateOrder, onChange, clearInput] = useSubmitDataForm( {delivery_date: ""} );
  
  const productOrder = productList.map( (p) => {
    return {productId: p.id, qty: p.qty}
  }); // -- --//-- -- //
  let calculate = 0; 
  if(productList.length > 0 ){
    productList.forEach( (prod) => {
      calculate = calculate + (prod.price * prod.qty);
    });
  }; // -- --//-- -- //

  return (
  <React.Fragment>
    <Header/>
    <style.TitleCart>Carrinho</style.TitleCart>
    {productList.length > 0 &&  <style.Total_Amount>Valor total {calculate.toFixed(2)}</style.Total_Amount>}
    <style.Form_Cart>
      <Input
        type = {"date"}
        text = {"Data de entrega:"}
        name = {"delivery_date"}
        placeholder = {"dia / mes / ano"}
        value = {dateOrder.delivery_date}
        handleOnChange = { onChange }
      />
    </style.Form_Cart>
    {orderMessage !== null && <style.OrderMessage>{orderMessage}</style.OrderMessage>}
    <style.Cart_Page_Control> {productList.length > 0 ? 
    productList.map( (prod) => {
    return (
      <style.Div_Control_Product key={prod.id}>
        <style.Div_Product>
          <style.Product>{prod.qty}</style.Product>
          <style.Product >{prod.name}</style.Product>
          <style.Product>R$: {(prod.price * prod.qty).toFixed(2)}</style.Product>
        </style.Div_Product>
        <style.Div_Buttons>
          <style.Btn_Input type='button' value="+" onClick={ () => updateQuantProduct(prod,"+")}/>
          <style.Btn_Input  type='button' value="-" onClick={ () => updateQuantProduct(prod,"-")}/>
        </style.Div_Buttons>
      </style.Div_Control_Product>
      )})// aqui acaba o map 
    :
    <style.Cart_Empty>Vazio &#128577; </style.Cart_Empty>
    }</style.Cart_Page_Control>
    {productList.length > 0 &&
    <style.Btn_Control_ConfirmORClear> 
      <Button type="button" onClick={ () => [clearCart(),clearInput()]}>Limpar Carrinho</Button> 
      <Button type="button" onClick={ () => sendOrder(dateOrder.delivery_date,productOrder,clearInput)}>Finalizar pedido</Button>  
    </style.Btn_Control_ConfirmORClear>  
    }
  </React.Fragment>  
  )
};