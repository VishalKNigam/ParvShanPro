import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageWrapper = styled.div`
  perspective: 1000px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 45%;
  margin-bottom: 8px; /* Adjust as needed */
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.03) ; /* Adjust the scale factor as needed */
    
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ProductCard = ({ id, name, image, price, brand, category, gender }) => {
  return (
    <CardWrapper>
      <Link to={`/view/${id}`}>
        <ImageWrapper>
          <ImageContainer>
            <img src={image} alt={name} />
          </ImageContainer>
        </ImageWrapper>
      </Link>

      <h3>Name:-{name}</h3>
      <p>Price:-{price}</p>
      <p>Brand:-{brand}</p>
      <p>Category:-{category}</p>
      <p>Gender:-{gender}</p>
      <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 90%;
  
  background-color: goldenrod;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
height: 250px;
overflow: auto;
  .product-details {
    width: 100%;
    text-align: center;
    margin-top: 8px;
  }

  h3,
  p {
    margin-top: 8px;
    font-family: 'Roboto', sans-serif; /* Example: Use Google Fonts or another font source */
    color: #333; /* Adjust color as needed */
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
  }

  button {
    margin-top: 8px;
    background-color: #4caf50; /* Example: Adjust button color */
    color: #fff; /* Example: Adjust button text color */
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049; /* Example: Adjust hover color */
    }
  }
`;