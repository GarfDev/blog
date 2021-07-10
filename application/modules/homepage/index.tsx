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
              <HiddenInfo>
                <SecretLink to="/programming">Programming with me</SecretLink>
                <BottomLink to="/thoughts">Thoughts</BottomLink>
                <BottomLink to="/explore">Explore</BottomLink>
              </HiddenInfo>
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

const HiddenInfo = styled.div`
  right: 0;
  bottom: 0;
  position: absolute;
  transform: translate(0px, -10px);
  transition-duration: 500ms;
`;

const BottomLink = styled(RouterLink)`
  cursor: pointer;
  font-weight: 500;
  margin-right: 15px;
  text-decoration: none;
  user-select: none;
  font-size: 0.8rem;
  color: black;
  &:hover {
    color: #135fec;
  }
`;

const SecretLink = styled(BottomLink)`
  color: white;
  margin-right: 150px;
  &:hover {
    color: white;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;
