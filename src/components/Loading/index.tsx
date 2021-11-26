import React from "react";
import { Container, Loader, InnerLoader, Status } from "./style";

export const Loading: React.FC = () => {
  return (
    <Container>
      <Loader>
        <InnerLoader />
      </Loader>
      <Status>Loading...</Status>
    </Container>
  );
};
