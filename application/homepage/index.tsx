import React from "react";
import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Row, Spacer } from "../@global/components";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Nguyen Gia Tuan</title>
      </Helmet>
      <Home fluid>
        <Row fluid>
          <Col />
          <ContentCol>
            <Name>
              Nguyen Gia Tuan (
              <Link target="_blank" href="https://github.com/GarfDev">
                @GarfDev
              </Link>
              )
            </Name>
            <JobTitle>Software Engineer</JobTitle>
            <Spacer height="3mm" />
            <Info>Location: Ho Chi Minh City, Vietnam</Info>
            <Info>Email: garfdev.13@gmail.com</Info>
            <Info>Phone: (+84) 85 962 4268</Info>
          </ContentCol>
          <Col />
        </Row>
      </Home>
    </> 
  );
};

export default Homepage;

const Home = styled(Container)`
  min-height: 100vh;
  overflow: hidden;
`;

const ContentCol = styled(Col)`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Name = styled.span`
  display: block;
  font-weight: bold;
`;

const JobTitle = styled(Name)`
  color: darkgrey;
  font-size: 0.8rem;
`;

const Info = styled(Name)`
  font-weight: normal;
  font-size: 0.8rem;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;
