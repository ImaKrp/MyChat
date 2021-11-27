import React, { useState, useEffect } from "react";
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
import { useChat } from "../../hooks/useChat";

interface IMessage {
  room: string;
  author: string;
  message: string;
  time: string;
}

const Room: React.FC = () => {
  const params = useParams();
  const { roomId: currentRoom } = params;
  const {
    name: user,
    socket,
    setMessageList: setMessagesToLocalStorage,
    getMessageList,
  } = useChat();
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<IMessage[]>(
    getMessageList() ?? []
  );
  const [currentUsers, setCurrentUsers] = useState([user]);

  useEffect(() => {
    setMessagesToLocalStorage(messageList);
  }, [messageList, setMessagesToLocalStorage]);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const time = new Date(Date.now());
    const messageData: IMessage = {
      room: currentRoom ?? "",
      author: user,
      message: currentMessage,
      time: `${time.getHours()}:${
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
      }`,
    };

    await socket.emit("send_message", messageData);
    setCurrentMessage("");
    setMessageList([...messageList, messageData]);
  };

  useEffect(() => {
    socket.on("receive_message", (data: IMessage) => {
      setMessageList([...messageList, data]);
    });
  }, [socket, messageList]);

  useEffect(() => {
    socket.on("connected_users", (data: string[]) => {
      setCurrentUsers(data);
    });
  }, [socket, currentUsers]);

  useEffect(() => {
    socket.emit("join", currentRoom, user);
  }, [currentRoom, socket, user]);

  return (
    <Container>
      <Header>
        <Return to="/" onClick={() => localStorage.removeItem("@MyChat:Messages")}>
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
            {
              messageList?.filter((message) => message.author !== user)[0]
                ?.author
            }
          </span>
        </RoomInfo>
      </Header>
      <MessageBox>
        {messageList &&
          messageList.map((message, index) => {
            if (message.author === user)
              return (
                <OutgoingMessage key={index}>
                  {message.message}
                  <span>{message.time}</span>
                </OutgoingMessage>
              );
            else
              return (
                <IncomingMessage key={index}>
                  {message.message}
                  <span>{message.time}</span>
                </IncomingMessage>
              );
          })}
      </MessageBox>
      <Footer onSubmit={(e) => submitForm(e)}>
        <Input
          placeholder="Type a message"
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          required
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
