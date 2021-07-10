import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Col } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Row, Spacer } from "../../@global/components";
import Page from "../../@global/styles/page";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Nguyen Gia Tuan</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Page fluid>
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
              <HiddenInfo to="/experiments">Experiments</HiddenInfo>
            </ContentCol>
            <Col />
          </Row>
        </Page>
      </motion.div>
    </>
  );
};

export default Homepage;

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

const HiddenInfo = styled(RouterLink)`
  right: 0;
  bottom: 0;
  cursor: pointer;
  font-weight: 500;
  position: absolute;
  transform: translate(-30%, -50%);
  transition-duration: 500ms;
  text-decoration: none;
  user-select: none;
  font-size: 0.8rem;
  color: black;
  &:hover {
    color: #135fec;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;
