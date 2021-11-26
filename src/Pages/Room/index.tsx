import React from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";

const Room: React.FC = () => {
  const params = useParams();
  const { roomId } = params;

  return <Container>{roomId}</Container>;
};

export default Room;
