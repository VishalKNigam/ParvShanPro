import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Pages/Redux/Products/action';
import { ProductCard } from './ProductCard';
import styled from 'styled-components';

export const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((store)=> store.productReducer.products);
    useEffect(()=>{
        dispatch(getProduct())
    }, [])
    console.log(products);
  return (
    <DIV>
{products.length > 0 && products.map((el,i)=>(
    <ProductCard key={el.id} {...el}  />
))}
    </DIV>
  )
}
const DIV = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
  gap: 15px;
  margin-left: 2%;

`
