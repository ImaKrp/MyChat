import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { AppRoutes } from "./routes";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyleProvider />
      <AppRoutes />
    </>
  );
};
