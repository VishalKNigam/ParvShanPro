import React from "react";
import { ProductList } from "../Components/ProductList";
import { SideBar } from "../Components/SideBar";
import styled from "styled-components";
import Footer from "../Components/Footer";

// Styled component with a more descriptive name
const StyledHomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 16px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  justify-content: space-between;

  .sidebar {
    width: 25%;
    background-color: #fff;
    padding: 10px;
    border-right: 1px solid #ccc;

    &:hover {
      background-color: #f9f9f9;
    }
  }

  .product-list {
    width: 73%;
    padding: 10px;

    &:hover {
      background-color: #e0e0e0;
    }
  }

`;

export const HomePage = () => {
  return (
    <>
      <StyledHomePageContainer>
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="product-list">
          <ProductList />
        </div>
      </StyledHomePageContainer>
      <Footer />
    </>
  );
};
