import React, {useState, useEffect} from "react";

export const cartFunctions = () => {
  const [addProductAlert, setAddProductAlert] = useState({message: null, productId: ""});
  const [count, setCount] = useState(0);
  const [productList, setProductList] = useState([]);
  const cartList = JSON.parse(localStorage.getItem("cartProduct"));


  useEffect( () => {
    if(cartList !== null && cartList !== undefined){
      setProductList(cartList)
    }
    setTimeout( () => setAddProductAlert({message: null, productId: ""}),2000);
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
  };// ------ ------- ------- ------- ---------- //

  const clearCart = () => {
    localStorage.removeItem("cartProduct")
    setProductList([])
  };// --- --- // --- --- --- //

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
  };// --- --- // --- --- --- //

  const sendOrder = () => {
    console.log("funcionando o finalizar pedido")
    const token = localStorage.getItem("token")
    if(!token) {
      return alert("Você precisa de uma Conta para finalizar o pedido")
    }
  };// --- --- // --- --- --- //
  return {
    productList,
    addProductAlert,
    setAddProductAlert,
    sendOrder, 
    updateQuantProduct, 
    clearCart, 
    addProductToCart
  }
};