import React from "react";
import { motion } from "framer-motion";
import Page from "../../@global/styles/page";

const Projects = (): JSX.Element => {
  // Main return
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Page fluid>TEst</Page>
    </motion.div>
  );
};

export default Projects;
