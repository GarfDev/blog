import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Scrollbars } from 'react-custom-scrollbars';
import AutoSizer from 'react-virtualized-auto-sizer';
import Page from "../../@global/styles/page";

const Projects = (): JSX.Element => {
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();



  // Main return
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Page fluid>
        <AutoSizer>
          {({width, height}) => (
            <Scrollbars style={{ width, height }}>
              Under Heavy Development
            </Scrollbars>
          )}
        </AutoSizer>
      </Page>
    </motion.div>
  );
};

export default Projects;
