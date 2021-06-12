import React from "react";
import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import { Row, Spacer } from "../@global/components";

const Homepage = () => {
  return (
    <Home fluid>
      <Row fluid>
        <Col />
        <ContentCol>
          <Name>Nguyen Gia Tuan (@GarfDev)</Name>
          <JobTitle>Software Engineer</JobTitle>
          <Spacer height="3mm" />
          <JobTitle>Location: Ho Chi Minh City, Vietnam</JobTitle>
          <JobTitle>Phone: (+84) 85 962 4268</JobTitle>
        </ContentCol>
        <Col />
      </Row>
    </Home>
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
  font-weight: normal;
  font-size: 0.8rem;
`;
