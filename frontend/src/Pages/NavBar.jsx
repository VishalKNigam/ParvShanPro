import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <NavWrapper>
      <Link to={"/"}>
        <h1>Parv-Shan</h1>
      </Link>
      <Link to={"/login"}>
        <h2>Login</h2>
      </Link>
      <Link to={"/admin"}>
        <h2>Admin</h2>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  position: sticky;
  top: 0;
  z-index: 1;

  img {
    width: 70px;
    height: 70px;
  }

  a {
    text-decoration: none; /* Remove underline from links */
    color: #333; /* Change link color */
    font-weight: bold; /* Make link text bold */
    margin: 0 10px; /* Add horizontal spacing between links */
  }

  /* Media query for responsive design */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      margin: 0;
    }

    a {
      margin-top: 10px;
    }
    h2 {
      font-size: smaller;
    }
  }
`;
