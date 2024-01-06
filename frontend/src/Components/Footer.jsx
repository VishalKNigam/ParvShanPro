import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  background-color: #e67300;
  color: white;
  padding: 30px;
  margin-top: 0px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin: auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MissionBox = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    text-align: left;
    align-self: center;
  }
`;

const MissionHeading = styled.h2`
  text-align: left;
  font-size: 25px;
  margin-bottom: 30px;
`;

const MissionText = styled.p`
  width: 250px;
`;

const ColumnBox = styled.div`
  text-align: left;
  font-size: 17px;
  align-self: center;
`;

const ColumnHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 30px;
`;

const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 18px;
  margin-left: -40px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <GridContainer>
        <MissionBox>
          <MissionHeading>We're on a mission.</MissionHeading>
          <MissionText>
            At ParvShan, we harness the power of state-of-the-art technology to
            revolutionize the e-commerce landscape, bringing you a seamless and
            unparalleled shopping experience.
          </MissionText>
        </MissionBox>

        <ColumnBox>
          <ColumnHeading>Company</ColumnHeading>
          <ul>
            <ListItem>About Us</ListItem>
            <ListItem>Recognition</ListItem>
            <ListItem>Executive Team</ListItem>
            <ListItem>Careers</ListItem>
          </ul>
        </ColumnBox>

        <ColumnBox>
          <ColumnHeading>Products</ColumnHeading>
          <ul>
            <ListItem>Business Loans | Main</ListItem>
            <ListItem>Loan Calculator</ListItem>
            <ListItem>Refer a Friend</ListItem>
            <ListItem>Partner Program</ListItem>
          </ul>
        </ColumnBox>
                        
        <MissionBox>
          <ColumnHeading>Help</ColumnHeading>
          <ul>
            <ListItem>Customer Care</ListItem>
            <ListItem>Recognition</ListItem>
            <ListItem>Security Center</ListItem>
            <ListItem>Blog</ListItem>
          </ul>
        </MissionBox>
      </GridContainer>
    </FooterContainer>
  );
};

export default Footer;
