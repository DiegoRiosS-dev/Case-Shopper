import React, {useState, useEffect} from "react";
import axios from "axios";
import { Url } from "./url";

export const cartFunctions = () => {
  const [addProductAlert, setAddProductAlert] = useState({message: null, productId: ""});
  const [count, setCount] = useState(0);
  const [productList, setProductList] = useState([]);
  const [orderMessage, setOrderMessage] = useState(null);
  const cartList = JSON.parse(localStorage.getItem("cartProduct"));
  
  
 
  useEffect( () => {
    if(cartList !== null && cartList !== undefined){
      setProductList(cartList)
    }
    setTimeout( () => setAddProductAlert({message: null, productId: ""}),1000);
  },[count]);
  // --- --- // --- --- --- //

  const addProductToCart = (product) => {
    setAddProductAlert({message:"Produto adicionado", productId: product.id})
    let newArray = [...productList]
    const findProd = productList.find( prod => prod.id === product.id)
    if(newArray.length > 0 && findProd){
      newArray.map((prod) => {
        if(prod.id === product.id){
          prod.qty += 1;
        }
      })
      setProductList(newArray)
    }else{
      newArray.push({
        id: product.id,
        name:product.name,
        price: product.price,
        qty: 1
      })
      setProductList([...newArray])  
    }
    localStorage.setItem("cartProduct",JSON.stringify(newArray))
    setCount(count + 1)
  }; // ------ ------- ------- ------- ---------- //

  const clearCart = () => {
    localStorage.removeItem("cartProduct")
    setProductList([])
  }; // --- --- // --- --- --- //

  const updateQuantProduct = (product,operator) => {
    let newArray = [...productList]
    const findProd = productList.find( prod => prod.id === product.id)
    if(newArray.length > 0 && findProd && operator === "+"){
      newArray.map((prod) => {
        if(prod.id === product.id){
          prod.qty += 1;
        }
      })
    }else if(operator === "-") {
      newArray.map((prod) => {
        if(prod.id === product.id){
          prod.qty -= 1;
        }
      })
    };
    const index = newArray.indexOf(product)
    if(newArray.length > 0 && findProd.qty === 0){
      newArray.splice(index, 1)
    };
    localStorage.setItem("cartProduct",JSON.stringify(newArray))
    setCount(count + 1)
  }; // --- --- // --- --- --- //
  const sendOrder = (date,productOrder,clearInput) => {
    const token = localStorage.getItem("token");
    if(!token) {
      return alert("Você precisa de uma Conta para finalizar o pedido")
    };
    let dateConvert = "";
    if(date.length === 10 ){
      const yaer = `${date[0]}${date[1]}${date[2]}${date[3]}`
      const month = `${date[5]}${date[6]}`
      const day = `${date[8]}${date[9]}`
      dateConvert = `${day}/${month}/${yaer}`
    }else{
      return alert("Preencha a data de entrega")
    };
    axios.post(Url.createOrder,{
      clientId: token,
      delivery_date: dateConvert,
      products: productOrder
    }).then( (response) => {
      setOrderMessage(response.data.message)
      clearCart()
      clearInput()
    }).catch( (error) => {
      setOrderMessage(error.response.data)
    });
  }; // --- --- // --- --- --- //

  return {
    productList,
    addProductAlert,
    orderMessage,
    sendOrder,
    setAddProductAlert,
    updateQuantProduct, 
    clearCart, 
    addProductToCart
  }
};