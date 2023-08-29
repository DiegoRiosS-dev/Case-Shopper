import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../header/Header';
import Button from "../../button/Button"
import * as style from './styleCart';
import { cartFunctions } from '../../../assets/cartFunctions';

export const CartPage = () => {
  const navigate = useNavigate();
  const {sendOrder, updateQuantProduct, clearCart, productList }  = cartFunctions();
  const [totalPrice, setTotalPrice] = useState(0)
  
  const productPrices = productList.map( prod => prod.qty * prod.price)
  // for( let p of productPrices){

  // }
  return (
  <React.Fragment>
    <Header/>
    <style.TitleCart>Carrinho</style.TitleCart>
    <p>Valor total {totalPrice}</p>
    <style.Cart_Page_Control> {productList.length > 0 ? 
    productList.map( (prod) => {
    return (
      <style.Div_Control_Product key={prod.id}>
        <style.Div_Product>
          <style.Product>{prod.qty}</style.Product>
          <style.Product >{prod.name}</style.Product>
          <style.Product>R$: {prod.price * prod.qty}</style.Product>
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
      <Button type="button" onClick={ () => clearCart()}>Limpar Carrinho</Button> 
      <Button type="button" onClick={ () => sendOrder()}>Finalizar pedido</Button>  
    </style.Btn_Control_ConfirmORClear>  
    }
  </React.Fragment>  
  )
};