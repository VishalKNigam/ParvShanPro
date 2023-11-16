import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCard = ({
  id,
  name,
  image,
  price,
  brand,
  category,
  gender,
}) => {
  const isAuth = useSelector((store)=>store.authReducer.isAuth)
  return (
    <CardWrapper>
      <Link to= {`/view/${id}`}>
        <img src={image} alt={name} />
      </Link>

      <h1>Name:-{name}</h1>
      <h3>Price:-{price}</h3>
      <p>Brand:-{brand}</p>
      <p>Category:-{category}</p>
      <p>Gender:-{gender}</p>
      {/* {isAuth && (<button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>)} */}
       <button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  border: 2px solid red;
  width: 90%;
  background: linear-gradient(lightgreen, orange, lightblue);

  img {
    width: 100%;
    display: block;
  }

  h1,
  h3,
  p {
    margin: 8px 0;
  }
`;
