import React, { useState } from "react";
import {
  Container,
  Header,
  Footer,
  MessageBox,
  Return,
  RoomInfo,
  Input,
  Send,
  IncomingMessage,
  OutgoingMessage,
} from "./style";
import { useParams } from "react-router-dom";
import { getLocalData } from "../../utils/Storage";

const Room: React.FC = () => {
  const params = useParams();
  const { roomId: currentRoom } = params;
  const user = getLocalData("@MyChat:User");
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentUsers] = useState([user]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Header>
        <Return to="/">
          <svg viewBox="0 0 492 492">
            <path
              fill="currentColor"
              d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
		            C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
		            c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
		          	l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
            />
          </svg>
        </Return>
        <RoomInfo>
          <h6>{currentRoom}</h6>
          <span>
            {currentUsers.length !== 1
              ? `${currentUsers[0]}, ${currentUsers[1]}`
              : currentUsers}
          </span>
        </RoomInfo>
      </Header>
      <MessageBox>
        <IncomingMessage>
          Some nice message<span>12:51</span>
        </IncomingMessage>
        <OutgoingMessage>
          Some nice and bigger message just testing the auto fitting
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          <span>12:53</span>
        </OutgoingMessage>
      </MessageBox>
      <Footer onSubmit={(e) => submitForm(e)}>
        <Input
          placeholder="Type a message"
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <Send>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
            ></path>
          </svg>
        </Send>
      </Footer>
    </Container>
  );
};

export default Room;
