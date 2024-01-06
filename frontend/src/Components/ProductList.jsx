import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/Products/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

export const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.getAll("gender"));
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const paramsObj = {
    params: {
      gender: searchParams.getAll("gender"),
      category: searchParams.getAll("category"),
      _sort:searchParams.get("order") && "price", //sorting by default is ascending (read documentation of npm json server of sort) so to avoid we do this
      _order: searchParams.get("order")        // we do it. now sort functionality will work only if order = 'asc' or 'desc' is present

    }
    
  }
  useEffect(() => {
    console.log("paramsObj",paramsObj)
    dispatch(getProduct(paramsObj));
  }, [searchParams]);
  console.log(products);
  return (
    <DIV>
      {products.length > 0 &&
        products.map((el, i) => <ProductCard key={el.id} {...el} />)}
    </DIV>
  );
};
const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  margin-left: 2%;
`;
