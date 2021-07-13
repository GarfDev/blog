import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars";
import AutoSizer from "react-virtualized-auto-sizer";
import { Row, Spacer } from "../../@global/components";
import Page from "../../@global/styles/page";
import { Col } from "react-bootstrap";

const Projects = (): JSX.Element => {
  // Main return
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Page fluid>
        <Row fluid>
          <Col />
          <ContentCol>
            <AutoSizer>
              {({ width, height }) => (
                <Scrollbars style={{ width, height }}>
                  <Project>
                    <Title>Everyone Chat Application</Title>
                    <Text>
                      A chat app based on Blockchain Technology. Designed for
                      the need to send non-revertible messages. Also, a new way
                      to burn money without any benefit and against any existed
                      rules about privacy.
                    </Text>
                    <Spacer height="2mm" />
                    <SubTitle>Takeaways</SubTitle>
                    <Text>Blockchain Development Environment setup</Text>
                    <Text>
                      Solidity (basic) - Type system, Function, Function Type
                    </Text>
                    <Text>Integrate FE with metamask/network/contract</Text>

                    <Spacer height="2mm" />
                    <SubTitle>Explored Technology</SubTitle>
                    <Text>Blockchain, Solidity, Recoil (a new state management library for react)</Text>
                    
                    <Spacer height="2mm" />
                    <SubTitle>Project Link</SubTitle>
                    <Text>Demo: <a target="_blank" href="https://sad-jones-dfd7e9.netlify.app/">Here</a></Text>
                    <Text>Source Code: <a target="_blank" href="https://github.com/GarfDev/simple-chat-app-blockchain-based">Github</a></Text>
                  </Project>
                </Scrollbars>
              )}
            </AutoSizer>
          </ContentCol>
          <Col />
        </Row>
      </Page>
    </motion.div>
  );
};

export default Projects;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  margin: 10px;
`;

const Text = styled.span`
  font-size: 0.7rem;
`;

const Title = styled(Text)`
  font-size: 1rem;
  font-weight: bold;
`;

const SubTitle = styled(Title)`
  font-size: 0.8rem;
`;

const ContentCol = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
