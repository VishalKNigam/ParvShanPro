import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

// Keyframe for the 3D effect
const rotate3D = keyframes`
  0% {
    transform: rotateX(0) rotateY(0);
  }
  25% {
    transform: rotateY(180deg);
  }
  50% {
    transform: rotateY(360deg);
  }
`;

const AboutSection = styled.section`
  background-color: #f9f9f9;
  padding: 40px 0;

`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 550px;
  border-radius: 8px;
  animation: ${rotate3D} 16s infinite linear;
  &:hover{
    animation: infinite linear;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: none;
    margin-bottom: 10px;
    
  }
`;

const AboutData = styled.div`
  padding: 0 20px;
  
  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .about__details {
    

    .about__details-description {
      display: flex;
      align-items: center;
      

      .about__details-icon {
        margin-right: 10px;
        font-size: 1.5em;
        color: #3498db;
        transition: color 0.3s ease;

        &:hover {
          color: #2980b9;
        }
      }
    }
  }

  .button--link {
    display: flex;
    align-items: center;
    color: #fff;
    background-color: #3498db;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    .button__icon {
      margin-left: 10px;
    }

    &:hover {
      background-color: #2980b9;
    }
  }
`;



const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutImage src="https://img.freepik.com/free-vector/online-wishes-list-concept-illustration_114360-3900.jpg?size=626&ext=jpg&ga=GA1.1.648946947.1702738635&semt=ais" alt="" />
        <AboutData>
          <h2>
            Discover the Goodness <br /> of Our Website
          </h2>
          <p>
            We pride ourselves on providing an exceptional online shopping experience with over 4000+ positive reviews. Our customers trust our meticulous Product selection process and reliable delivery services every time.
          </p>
          <div className="about__details">
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i>
              Timely deliveries are our commitment.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i>
              Comprehensive guides to protect and care for your plants.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i>
              Post-sale check-ups to ensure your satisfaction.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i>
              100% money-back guarantee.
            </p>
          </div>
          <a onClick={handleClick} className="button--link button--flex">
            Explore Now <i className="ri-arrow-right-down-line button__icon"></i>
          </a>
        </AboutData>
      </AboutContainer>
      <Footer />
    </AboutSection>
  );
};

export default About;
