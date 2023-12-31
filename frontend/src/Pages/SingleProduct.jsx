import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductCard } from "../Components/ProductCard";

export const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const products = useSelector((store) => store.productReducer.products);
  console.log(products)
  useEffect(() => {
    const product = products.find((el) => el.id === +id);
    console.log(product)
    setData(product);
  },[id,products]);

  return (
    <div style={{width:"35%", height:"auto", margin: "auto", "border": "solid red"  }}>
      <div style={{ height: "auto", margin: "auto", "border": "solid blue"  }}>SingleProduct: {id}</div>
      <ProductCard {...data} />
    </div>
  );
};
