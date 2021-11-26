import React, { useState } from "react";
import { Container, Input, InputDiv, Submit } from "./style";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>();
  const [roomId, setRoomId] = useState<string>();

  const [nameError, setNameError] = useState("");
  const [roomError, setRoomError] = useState("");

  const changeRoomId = (value: string) => {
    if (!roomId) setRoomId(`#${value}`);
    else setRoomId(value);
    setRoomError(value ? "" : "⨉ Please, insert a room id.");
  };

  const changeName = (value: string) => {
    setName(value);
    setNameError(value ? "" : "⨉ Please, insert your name.");
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) setNameError("⨉ Please, insert your name.");

    if (!roomId) setRoomError("⨉ Please, insert a room id.");

    if (!name || !roomId) return;

    navigate(`/${roomId.replace(/\D/g,'')}`);
  };

  return (
    <Container onSubmit={(e) => submitForm(e)}>
      <div>
        <h4>
          Welcome to <span>My Chat</span>!
        </h4>
        <h5>Join a room.</h5>
      </div>
      <InputDiv>
        <label>Name:</label>
        <Input
          placeholder="Insert your name here"
          value={name}
          onChange={(e) => changeName(e.target.value)}
        />
        {nameError && <span>{nameError}</span>}
      </InputDiv>
      <InputDiv>
        <label>Room Id:</label>
        <Input
          placeholder="Insert the room id here"
          value={roomId}
          onChange={(e) => changeRoomId(e.target.value)}
        />
        {roomError && <span>{roomError}</span>}
      </InputDiv>
      <Submit type="submit">Join</Submit>
    </Container>
  );
};

export default Landing;
