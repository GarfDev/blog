import React from "react";
import BaseRow, { RowProps } from "react-bootstrap/Row";

type Props = RowProps & {
  fluid?: boolean;
  children: React.ReactNode;
};

const Row = ({ children, fluid = false, ...rest }: Props) => {
  // Main return
  return (
    <BaseRow style={{ height: fluid && "100%" }} {...rest}>
      {children}
    </BaseRow>
  );
};

export default Row;
