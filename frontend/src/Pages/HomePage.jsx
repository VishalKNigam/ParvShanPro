import React from "react";
import { ProductList } from "../Components/ProductList";
import { SideBar } from "../Components/SideBar";
import styled from "styled-components";

export const HomePage = () => {
  
  return (
    <DIV>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="product-list">
        <ProductList />
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  display: flex;
  flex-direction: row;
  .sidebar{
    width: 15%;
  }
  .product-list{
    width: 80%;
  }

`
