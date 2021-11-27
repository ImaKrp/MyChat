import React, { createContext, useState } from "react";
import io from "socket.io-client";
import { changeLocalData, getLocalData } from "../utils/Storage";

interface IMessage {
  room: string;
  author: string;
  message: string;
  time: string;
}

export interface IChatContext {
  socket: any;
  roomId: string;
  name: string;
  changeData(newName?: string, newRoomId?: string): void;
  setMessageList(object: IMessage[]): void;
  getMessageList(): IMessage[];
}

export const ChatContext = createContext<IChatContext>({} as IChatContext);

export const ChatProvider: React.FC = ({ children }) => {
  const [name, setName] = useState(getLocalData("@MyChat:User") ?? "");
  const [roomId, setRoomId] = useState(getLocalData("@MyChat:Room") ?? "");
  const socket = io("http://localhost:8000");

  const changeData = (newName?: string, newRoomId?: string) => {
    if (newName) {
      setName(newName);
      changeLocalData({ itemName: "@MyChat:User", object: newName });
    }
    if (newRoomId) {
      setRoomId(newRoomId);
      changeLocalData({ itemName: "@MyChat:Room", object: newRoomId });
    }
  };

  const setMessageList = (object: IMessage[]) => {
    changeLocalData({ itemName: "@MyChat:Messages", object: object });
  };

  const getMessageList = () => {
    const data = getLocalData("@MyChat:Messages");
    return data;
  };

  return (
    <ChatContext.Provider
      value={{
        socket,
        roomId,
        name,
        changeData,
        setMessageList,
        getMessageList,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
