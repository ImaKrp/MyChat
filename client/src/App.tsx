import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { AppRoutes } from "./routes";
import { ChatProvider } from "./contexts/ChatContext";

export const App: React.FC = () => {
  return (
    <>
      <ChatProvider>
        <GlobalStyleProvider />
        <AppRoutes />
      </ChatProvider>
    </>
  );
};
