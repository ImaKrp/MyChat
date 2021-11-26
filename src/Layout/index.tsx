import React from "react";
import { Container } from "./style";

export const Layout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;