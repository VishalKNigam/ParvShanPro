import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  max-width: 400px;
  border-radius: 8px;
  animation: ${rotate3D} 16s infinite linear;
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
    margin-bottom: 20px;

    .about__details-description {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

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

const AdditionalContent = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 10px;
    margin: 12px;
    padding: 12px;
  }

  p {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 20px;
    margin: 12px;
    padding: 12px;
  }

  .additional__image {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
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
      <AdditionalContent>
        <h3>More About Us</h3>
        <p>
        Parv-Shan, your go-to online destination for curated excellence, brings you a delightful shopping experience where each product tells a unique story,promising not just purchases but a journey of quality, care, and unparalleled satisfaction.        </p>
        <img className="additional__image" src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg" alt="" />
      </AdditionalContent>
    </AboutSection>
  );
};

export default About;
