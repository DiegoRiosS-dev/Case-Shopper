import React, { useState } from 'react';
import { useRequestData } from '../../hoks/useRequestData';
import { useNavigate } from "react-router-dom";
import * as style from "./styleHome";
import Header from '../../header/Header';
import { Url } from "../../../assets/url";
import { cartFunctions } from '../../../assets/cartFunctions';

export const HomePage = () => {
  const navigate = useNavigate();
  const [data,isLoad,errordata] = useRequestData(Url.getProducts);
  const [qtyCard, setQtyCard] = useState(12);
  const { addProductAlert, addProductToCart} = cartFunctions();
  

  const products = data && !isLoad && data.map( (product) => {
    return (
      <style.Product_Card key={product.id}>
        {product.qty_stock === 0 ? <style.ProductQty>Estoque zerado</style.ProductQty> : 
          <style.ProductQty>Q: <b>{product.qty_stock}</b></style.ProductQty>
        }
        <style.Product>{product.name}</style.Product>
        <style.Product>R$: {product.price} ;</style.Product>
        {product.qty_stock === 0 ? <React.Fragment></React.Fragment> :
          <style.ProductButton type="button" value="Compar"  onClick={ () => addProductToCart(product)}/>
        }        
        {addProductAlert !== null && addProductAlert.message && addProductAlert.productId === product.id &&  
          <style.Product>{addProductAlert.message}</style.Product> 
        }
      </style.Product_Card>
    )
  }).filter( (product,index) => index < qtyCard);  
  // ------ ------- ------- ------- ---------- //

  return (
  <React.Fragment>
    <Header/>
    <style.Home_Section_Control style={ isLoad? {display:"flex", justifyContent:"center", alignItems:"center"} : {}}>
      {isLoad && <style.Div_Load>
        <style.Product_Load>Carregando...</style.Product_Load>
      </style.Div_Load>}
      {!isLoad && data && 
        <React.Fragment>
          <style.TitleHome>Nossos Produtos</style.TitleHome>
          <style.Product_Control>
            {products}
          </style.Product_Control>
          {data.length <= qtyCard ? 
            <style.DivButton>
              <style.BTnShowMore type='button' value="Ver Menos" onClick={() => setQtyCard(12)}/>
            </style.DivButton>
           : 
            <style.DivButton>
              <style.BTnShowMore type='button' value="Ver mais" onClick={() => setQtyCard(qtyCard + 5)}/>
            </style.DivButton>
          }
        </React.Fragment>
      }
    </style.Home_Section_Control>
  </React.Fragment>   
  )
};