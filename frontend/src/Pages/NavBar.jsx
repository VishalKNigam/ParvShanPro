import React from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;
const extractColorAnimation = keyframes`
  0% { background-color: #f8f8f8; }
  50% { background-color: #f0e0a1; }
  100% { background-color: #f8f8f8; }
`;
const fadeInAnimation = keyframes`
  0% { opacity: 0; transform: translateY(0px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulseAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;
const LogoLink = styled(Link)`
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    margin: 0;
    padding: 10px;
    background-color: #f8f8f8;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    animation: ${shakeAnimation} 0.5s ease;

    &:hover {
      background-color: #ffffff;
      transform: translateX(0); /* Reset the transform when hovering starts */
      animation: ${shakeAnimation} 0.5s ease; /* Apply the shake animation */
      animation-fill-mode: both; /* Keep the final state of the animation */
      animation-delay: 0.1s; /* Add a small delay before the animation starts */
    }

    &:active {
      animation: ${extractColorAnimation} 0.2s ease; /* Apply the color extraction animation on click */
      animation-fill-mode: both;
    }
  }
`;
export const NavBar = () => {
  return (
    <NavWrapper>
      <LogoLink to={"/"}>
        <h1>𝖯𝖺𝗋𝗏-𝕾𝖍𝖆𝖓</h1>
      </LogoLink>
      <Link to={"/login"}>
        <h2>Login</h2>
      </Link>
      <Link to={"/admin"}>
        <h2>Admin</h2>
      </Link>
      <Link to={"/about"}>
        <h2>About</h2>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#f39c12;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 2px solid #333;
  color: white;
  font-size: 16px;
  font-family: 'Arial', sans-serif; /* Change the font family */
  transition: background-color 0.3s ease;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%; /* Make the image round */
    margin-right: 10px;
  }

  a {
    text-decoration: none; /* Remove underline from links */
    color: #333; /* Change link color */
    font-weight: bold; /* Make link text bold */
    margin: 0 10px; /* Add horizontal spacing between links */
    text-transform: uppercase; /* Convert text to uppercase */
    letter-spacing: 1px; 
  }
  a {
      margin-top: 10px;
    }
    h2 {
    font-size: 18px;
    font-weight: bold;
    color:#ffffff;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
      animation: ${fadeInAnimation} 0.5s ease; /* Apply the fadeIn animation on hover */
      animation-fill-mode: both;
    }

    &:active {
      animation: ${pulseAnimation} 0.5s ease; /* Apply the pulse animation on click */
      animation-fill-mode: both;
    }
  }

  /* Media query for responsive design */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 80px;
      height: 80px;
      margin: 0;
    }
  }
`;



