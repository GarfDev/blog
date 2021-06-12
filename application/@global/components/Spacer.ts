import React from "react";
import styled from "styled-components";

const Spacer = styled.div<{ height: React.ReactText }>`
  width: 100%;
  height: ${({ height }) => height};
`;

export default Spacer;
